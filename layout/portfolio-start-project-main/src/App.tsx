import './App.css';
import styled from 'styled-components';
import Rectangle from '../src/asset/img/Rectangle.png'

function App() {
    return (
        <div className="App">
            <Card>
                <StyledImg src={Rectangle}/>
                <Title>Headline</Title>
                <StyledP>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</StyledP>

                    <StyledBtn color="#4E71FE" fontSize={"10px"}>See more</StyledBtn>
                    <SuperButton color="#F5F5F5" fontSize={"10px"}>Save</SuperButton>

            </Card>
        </div>
    );
}

export default App;

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
}

type SuperButtonPropsType = {
    color?: string
    fontSize?: string
}


const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.55);
  width: 300px;
  height: 350px;
  box-shadow: 0px 4px 20px 5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`

const StyledImg = styled.img`
  width: 280px;
  height: 170px;
  margin-top: 10px;
  margin-left: 10px;
`

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
  padding-top: 10px;
  padding-left: 20px;
  color: #000;
`

const StyledP = styled.p`
  font-size: 16px;
  font-weight: bold;

  padding-left: 20px;
  color: #ABB3BA;
`

const StyledBtn = styled.button <StyledBtnPropsType>`
  //font-size: 10px;
  font-size: ${props => props.fontSize};
  font-weight: Bold;
  //background-color: #4E71FE;
  background-color: ${props => props.color || "#000"};
  color: #fff;
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-left: 20px;
  text-align: center;
  justify-content: center;

  &:hover {
    background-color: #fff;
    color: black;
  }
`

const SuperButton = styled.button <SuperButtonPropsType>`
  //font-size: 10px;
  font-size: ${props => props.fontSize};
  font-weight: Bold;
  //background-color: #F5F5F5;
  background-color: ${props => props.color || "#000"};
  width: 86px;
  height: 30px;
  border-radius: 5px;
  border: 2px solid #4E71FE;
  color: #4E71FE;
  margin-left: 12px;
  //padding: 4px 31px;
  text-align: center;
  justify-content: center;
  

  &:hover {
    background-color: #978282;
    color: black;
    border: none;
  }
`