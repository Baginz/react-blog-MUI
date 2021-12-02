import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material';
import { useState } from 'react';

const BlogFilter = ({ postQuery, latest, setSearchParams }) => {
    const [search, setSearch] = useState(postQuery);
    const [checked, setChecked] = useState(latest);

    const handleSubmit = (e) => {
        e.preventDefault();

        const query = search;
        const isLatest = checked;
        const params = {};

        if (query.length) params.post = query;
        if (isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <TextField
                label='search'
                variant="standard"

                type='search'
                value={search}
                onChange={e => setSearch(e.target.value)}
                sx={{
                  
                    width: "90%"

                }}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{
                mt: "10px",
                ml: "10px"
            }}>Search</Button>
            <FormControlLabel control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="New only" />
        </form>
    );
};

export default BlogFilter;

// <form autoComplete="off" onSubmit={handleSubmit}>
// <Box
//     sx={{
//         width: 500,
//         maxWidth: '100%',
//     }}
// >
//     <TextField fullWidth label="Search" id="fullWidth" value={search} onInput={e => setSearch(e.target.value)} />

//     <FormGroup autoComplete="off" onSubmit={handleSubmit}>
//         <FormControlLabel control={<Checkbox checked={checked} onInput={e => setChecked(e.target.checked)} />} label="New only" />
//     </FormGroup>
// </Box>
// <input type="submit" value="Search" />
// </form>