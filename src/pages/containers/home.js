import React from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/componets/categories';
import Related from '../../pages/components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import VideoPlayer from '../../player/container/video-player';
import { connect } from 'react-redux'

class Home extends React.Component{
    
    state = {
        modalVisible: false
    }

    handelOpenModalClick = ()=>{
        console.log("hola");
        this.setState({
            modalVisible: true
        })
    }

    handelCloseModalClick = ()=>{
        this.setState({
            modalVisible: false
        })
    }
    
    render(){
        return(
            <HomeLayout>
                <Related />
                <VideoPlayer autoplay />
                <Categories handelOpenModal= { this.handelOpenModalClick } categories={ this.props.categories } />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handelClick={ this.handelCloseModalClick } >
                            <h1>Esto es un Modal!</h1>
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

function mapStateToProps(state, props){
    return{
        categories: state.data.categories
    }
}

export default connect(mapStateToProps)(Home);