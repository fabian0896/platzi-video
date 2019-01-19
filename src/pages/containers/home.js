import React from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/componets/categories';
import Related from '../../pages/components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import VideoPlayer from '../../player/container/video-player';

class Home extends React.Component{
    
    state = {
        modalVisible: false
    }

    handelOpenModalClick = (media)=>{
        console.log("hola");
        this.setState({
            modalVisible: true,
            media,
        });

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
                <Categories handelOpenModal= { this.handelOpenModalClick } categories={ this.props.data.categories } />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handelClick={ this.handelCloseModalClick } >
                            <VideoPlayer src={ this.state.media.src } title={ this.state.media.title }  autoplay />
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

export default Home;