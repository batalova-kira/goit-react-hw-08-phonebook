import { useDispatch, useSelector } from 'react-redux';
import { onChangeFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import { TextField, Typography } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Typography
        component="h4"
        sx={{
          color: 'primary.darker',
          textTransform: 'uppercase',
          fontWeight: 500,
          letterSpacing: 0.5,
          textAlign: 'start',
          pb: 2,
        }}
      >
        Find contacts by name
      </Typography>
      <TextField
        size="small"
        placeholder="Enter name..."
        required
        sx={{
          backgroundColor: 'primary.contrastText',
          color: 'primary.darker',
          mb: 2,
          borderRadius: 1,
          width: '50%',
        }}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(onChangeFilter(e.target.value));
        }}
      />
    </div>
  );
};
