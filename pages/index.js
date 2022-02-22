import Header from '../Component/header/header'
import Main from '../Component/main/main'
import Menu from '../Component/menu/menu'
import Head from 'next/head'
import styled from 'styled-components'


const Content = styled.div`
    display: flex;

`




export default function Home (){

    return (
        <Content>
            <Head />
        <div>
            <Header />
              <Main /> 
        </div>
            <Menu /> 
            </Content>
        )
}