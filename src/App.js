import './App.css';
import React,{ useEffect, useState } from 'react';
import {Grid,AppBar,Tabs,Tab,Box,Typography,Toolbar,Drawer,List,ListItem,ListItemText, Tooltip} from "@material-ui/core";
import Produto from "./components/Produto";
import { makeStyles } from '@material-ui/core/styles'
import CategoriaForm from './components/CategoriaForm';
import ProdutoForm from './components/ProdutoForm';
import api from './services/api';

const useStyles = makeStyles(theme =>  ({
  appbar: {
    zIndex: theme.zIndex.drawer + 1
  },
  main: {
    paddingLeft: 200
  }
}))

const TabPanel = props => {
  const{children, value, index, ...other} = props

  return (
    <div role='tabpanel' hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}


function App() {

  const classes = useStyles()
  const [tabValue, setTabValue] = useState(0)
  const [categorias, setCategorias] = useState([])
  const [produtos, setProdutos] = useState([])
  const handleChange = (evento, newValue) => {
    setTabValue(newValue)
  }

  async function getCategorias(){
    const response = await api.get('categorias')
    setCategorias(response.data)
  }
  async function getProdutos(){
    const response = await api.get('products')
    setProdutos(response.data)
  }

  useEffect(()=>{ // carrega sempre que abre a pagina
    getCategorias()
    getProdutos()
  },[])

  return (
    <>
      <AppBar position="fixed" className={classes.appbar}>
        <Tabs value={tabValue} onChange={handleChange}>
          <Tab label="Produtos"/>
          <Tab label="Cadastro de Produto"/>
          <Tab label="Cadastro de Categoria"/>
        </Tabs>
      </AppBar>
      <Drawer 
        variant = 'permanent'
        style={{width: 240}}>
        <Toolbar />
        <List>
          {
            categorias.map(categoria => {
              return(
                <ListItem button key={categoria.id}>
                  <ListItemText>{categoria.name}</ListItemText>
                </ListItem>
              )
            })
          }
        </List>
      </Drawer>
      <Toolbar />
      <main className={classes.main}>
        <TabPanel value={tabValue} id="tab01" index={0}>
          <Grid container>
          {
              produtos.map((produto)=>(
                <Grid item xs={12} sm={4} md={6} xl={3} key={produto.id}>
                  <Produto nome={produto.nome} descricao={produto.descricao} preco={produto.preco} img={produto.img} />
                </Grid>
              ))
          }
          </Grid>
        </TabPanel>
        <TabPanel value={tabValue} id="tab02" index={1}>
          <ProdutoForm />
        </TabPanel>
        <TabPanel value={tabValue} id="tab03" index={2}>
          <CategoriaForm />
        </TabPanel>
      </main>
    </>
  );
}

export default App;