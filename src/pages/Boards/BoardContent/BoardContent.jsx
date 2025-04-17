import { Box } from '@mui/material'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/order-array-based-on-another-array'
import { DndContext, PointerSensor, useSensor, useSensors, MouseSensor, TouchSensor, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'
import Column from './ListColumns/Column/Column'
import Card from './ListColumns/Column/ListCards/Card/Card'

const ACTIVE_DRAG_ITEM_TYPE = {
  COLUMN: 'ACTIVE_DRAG_ITEM_TYPE_COLUMN',
  CARD: 'ACTIVE_DRAG_ITEM_TYPE_CARD'
}

const BoardContent = ({ board }) => {
  // https://docs.dndkit.com/api-documentation/sensors
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  })

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  })

  // Nhấn giữ 25ms và dung sai của cảm ứng (dễ hiểu là di chuyển/chênh lệch)
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  })

  const mySensors = useSensors(mouseSensor, touchSensor)

  const [orderColumnsState, setOrderColumnsState] = useState([])

  // Cùng một thời điểm chỉ có một phần tử đang được kéo (column hoặc card)
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)

  useEffect(() => {
    const orderColumns = mapOrder(board.columns, board.columnOrderIds, '_id')
    setOrderColumnsState(orderColumns)
    return () => {}
  }, [board])

  const handleDragStart = (event) => {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD: ACTIVE_DRAG_ITEM_TYPE.COLUMN)
    setActiveDragItemData(event?.active?.data?.current)
  }

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      //lay vi tri cu tu active
      const oldIndex = orderColumnsState.findIndex((c) => c._id === active.id)
      //lay vi tri moi tu over
      const newIndex = orderColumnsState.findIndex((c) => c._id === over.id)

      const dndOrderColumns = arrayMove(orderColumnsState, oldIndex, newIndex)
      const dndOrderColumnsIds = dndOrderColumns.map((i) => i._id)
      setOrderColumnsState(dndOrderColumns)
    }

    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  /**
   * Animation khi thả (Drop) phần tử – Test bằng cách kéo xong thả trực tiếp và nhìn phần giữ chỗ Overlay (video 32)
   */
  const dropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }


  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd} sensors={mySensors}>
      <Box
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
          height: (theme) => theme.trello.bordContentHeight,
          padding: '10px 0'
        }}
      >
        <ListColumns columns={orderColumnsState} />
        <DragOverlay dropAnimation={dropAnimation} >
          {!activeDragItemType && null}

          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) && (
            <Column column={activeDragItemData} />
          )}

          {(activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) && (
            <Card card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}

export default BoardContent
