import React, { useState } from 'react'
import { Grid, TextField, Typography, Button } from '@material-ui/core'
import api from "./../services/api"


const ProdutoForm = () => {
    
    const [form, setForm] = useState({
        nome: '', 
        preco: 0, 
        descricao: '', 
        img: 'https://images7.kabum.com.br/produtos/fotos/124417/notebook-acer-aspire-3-intel-core-i3-1005g1-4gb-1tb-windows-10-home-15-6-gray-a315-56-36z1_1599224319_g.jpg'
    })

    const handleSubmit = (e) => {
        api.post('products', form)
    };

    return(
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} alignItems="center" justify="center">
                <Grid item xs={12}>
                    <Typography align="center" variant='h4'>
                        <b>Cadastro de produto</b>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant='outlined'
                        value={form.nome}
                        onChange={e => setForm({ ...form, nome: e.target.value })}
                        required fullWidth label="Nome do produto" />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant='outlined'
                        value={form.preco}
                        onChange={e => setForm({ ...form, preco: e.target.value })}
                        required fullWidth label="Preço do produto" />
                </Grid> 
                <Grid item xs={12} sm={6} md={4}>
                    <TextField
                        variant='outlined'
                        value={form.descricao}
                        onChange={e => setForm({ ...form, descricao: e.target.value })}
                        required fullWidth label="Descrição do produto" />
                </Grid>
            </Grid>
            <Grid container spacing={2} justify='flex-end'>
                <Grid item xs={2}>
                    <Button variant="outlined" color="primary" type="submit" fullWidth>
                        Salvar
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}



export default ProdutoForm;