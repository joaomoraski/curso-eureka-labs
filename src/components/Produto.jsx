import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const Produto = ({ nome, descricao, preco, img }) => {
  return (
    <Paper style={{ padding: 8 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            {nome}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <img src={img} alt="Imagem do produto" />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption">{descricao}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            R$ {preco}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Produto;