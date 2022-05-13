import '../styles/ContactPage.css';
import { useInputState, useToggle } from '../customHooks';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ContactForm() {
    return (
        <div className="contactFormDiv">
            <InputForm />
            <SelectForm />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <CheckBoxForm />
        </div >
    )
}

function CheckBoxForm() {
    return (
        <div className="checkboxDiv">
            <p>What can we help you with?<span>(Check all that apply)(optional)</span></p>
            <FormGroup className="checkboxContainer">
                <FormControlLabel control={<Checkbox />} label="Chapter 7" />
                <FormControlLabel control={<Checkbox />} label="Chapter 13" />
                <FormControlLabel control={<Checkbox />} label="Divorce" />
                <FormControlLabel control={<Checkbox />} label="Custody" />
                <FormControlLabel control={<Checkbox />} label="Will" />
                <FormControlLabel control={<Checkbox />} label="Trust" />
                <FormControlLabel control={<Checkbox />} label="DUI" />
                <FormControlLabel control={<Checkbox />} label="Traffic Ticket" />
                <FormControlLabel control={<Checkbox />} label="Car Accident" />
                <FormControlLabel control={<Checkbox />} label="Settlements" />
            </FormGroup>
        </div>
    )
}

function InputForm() {
    return (
        <FormGroup>
            <TextField
                className='textField'
                required
                label="First Name"
            />
            <TextField
                className='textField'
                required
                label="Email"
            />
            <TextField
                className="textField"
                required
                label="Phone Number"
            />
        </FormGroup >
    )
}

function SelectForm() {
    const [island, setIsland] = useInputState('');
    const handleChange = (event) => {
        setIsland(event.target.value);
    };
    return (
        <FormControl fullWidth>
            <InputLabel id="selectLabel">Island</InputLabel>
            <Select
                labelId="selectLabel"
                id="selectComponent"
                value={island}
                label="Island"
                onChange={handleChange}
            >
                <MenuItem value="oahu">O'ahu</MenuItem>
                <MenuItem value="oahu">Big Island</MenuItem>
                <MenuItem value="oahu">Maui</MenuItem>
                <MenuItem value="oahu">Moloka'i</MenuItem>
                <MenuItem value="oahu">Kauai</MenuItem>
                <MenuItem value="oahu">Lanai</MenuItem>
                <MenuItem value="oahu">Other</MenuItem>
            </Select>
        </FormControl>
    )
}