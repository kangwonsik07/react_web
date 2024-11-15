import './css/Banner.css'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'

function Banner() {
   return (
      <div className="search">
         <form className="search_form">
            <Button startIcon={<SearchIcon />}></Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
         </form>
      </div>
   )
}

export default Banner
