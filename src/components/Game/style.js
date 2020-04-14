import style from 'styled-components'
export const Container = style.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Main = style.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    ul{
        list-style: none;
        margin: 2px, 50px;
    }
    button{
        align-self: center;
        padding: 10px 20px;
        width: 200px;
        background: #eee;
        border: 2px solid rgb( 209, 209, 209, 0.5)
    }
`
export const Title = style.div`
    background: #fff;
    padding: 20px;
    font-size: 60px;
`