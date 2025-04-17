import { AddCard, Cloud, ContentCopy, ContentCut, ContentPaste, DeleteForever, DragHandle, ExpandMoreOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import ListCards from './ListCards/ListCards'
import React from 'react'
import { Divider } from '@mui/material'
import { mapOrder } from '~/utils/order-array-based-on-another-array'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const Column = ({ column }) => {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const orderCards = mapOrder(column.cards, column.cardOrderIds, '_id')

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: column._id, data: { ...column } })

  const dndKitColumnstyle = {
    // touchAction: 'none',
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div ref={setNodeRef} style={dndKitColumnstyle} {...attributes} >
      <Box
        {...listeners}
        sx={{
          minWidth: 300,
          maxWidth: 300,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
          borderRadius: '6px',
          height: 'fit-content',
          maxHeight: (theme) => `calc(${theme.trello.bordContentHeight} - ${theme.spacing(5)})`
        }}
      >
        <Box
          sx={{
            height: (theme) => theme.trello.columnHeaderHeight,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Typography sx={{ fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' }} variant='h6'>
            {column?.title}
          </Typography>
          <Box>
            <Tooltip title='More option'>
              <ExpandMoreOutlined
                id='basic-column-dropdown'
                sx={{ color: 'text.primary' }}
                aria-controls={open ? 'basic-column-dropdown' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              ></ExpandMoreOutlined>
            </Tooltip>
            <Menu
              id='basic-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-column-dropdown'
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCard fontSize='small' />
                </ListItemIcon>
                <ListItemText>Add new card</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize='small' />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize='small' />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize='small' />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
              </MenuItem>

              <Divider />

              <MenuItem>
                <ListItemIcon>
                  <DeleteForever fontSize='small' />
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>

              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize='small' />
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        <ListCards cards={orderCards} />
        <Box
          sx={{
            height: (theme) => theme.trello.columnFooterHeight,
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Button startIcon={<AddCard />}>Add new card</Button>
          <Tooltip title='Drag to move'>
            <DragHandle sx={{ cursor: 'pointer' }} />
          </Tooltip>
        </Box>
      </Box>
    </div>
  )
}

export default Column
