import React, { useState } from 'react'
import { TextField ,Grid, Button, Typography } from '@material-ui/core/'

const CategoriaForm = () => {

    const [form, setForm] = useState({name: ''})

    const handleChange = event => {
        setForm({name: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault()
        alert(form.name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant='h4'>
                        <b>Cadastro de categoria</b>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={1} alignItems='center' justify='flex-start'>
                        <Grid item>
                            <TextField 
                                value={form.name} 
                                label="Nome da categoria" 
                                onChange={handleChange}
                                variant='outlined'
                                required/>
                        </Grid>
                        <Grid item>
                            <Button 
                                type='submit'
                                color='primary'
                                variant='contained'>
                                    Salvar
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </form>
    )


}

export default CategoriaForm