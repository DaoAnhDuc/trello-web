import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import Card from './Card/Card'
import { Box } from '@mui/material'

const ListCards = ({ cards }) => {
  return (
    <SortableContext items={cards?.map(c => c._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          p: '0 5px',
          m: '0 5px',
          maxHeight: (theme) =>
            `calc(${theme.trello.bordContentHeight} - ${theme.spacing(5)} - ${theme.trello.columnHeaderHeight} - ${theme.trello.columnFooterHeight})`,
          overflowX: 'hidden',
          overflowY: 'auto',
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da'
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf'
          }
        }}
      >
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
    </SortableContext>
  )
}

export default ListCards
