import React from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/componets/categories';
import Related from '../../pages/components/related';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import VideoPlayer from '../../player/container/video-player';
import {  connect } from 'react-redux';
import { List as list } from 'immutable'


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
            modalVisible: false,
        });
        this.props.dispatch({
            type: 'CLOSE_MODAL',
            payload: {
                visibility: false
            }
        })
    }

    componentWillMount(){
        const search = this.props.location.search;
        if(search){
            const id = search.split('=')[1];
            this.handelOpenModalClick(id);
        }
    }
    
    render(){
        return(
            <HomeLayout>
                <Related />
                <Categories search={this.props.search} handelOpenModal= { this.handelOpenModalClick } categories={ this.props.categories } />
                {
                    this.state.modalVisible &&
                    <ModalContainer>
                        <Modal handelClick={ this.handelCloseModalClick } >
                            <VideoPlayer mediaId={this.state.media}  autoplay />
                        </Modal>
                    </ModalContainer>
                }
            </HomeLayout>
        )
    }
}

function mapStateToProps(state, props){
    const categories = state.get('data').get('categories').map(categoryId=>{
        return state.get('data').get('entitis').get('categories').get(categoryId);
    });
    let searchResults = list();
    const search = state.get('data').get('search')
    if(search){
        const mediaList = state.get('data').get('entitis').get('media');
        searchResults = mediaList.filter((item)=>{
            return item.get('author').toLowerCase().includes(search.toLowerCase());
        }).toList();
    }
    return {
        categories: categories,
        search: searchResults,
        modalVisible: state.get('modal').get('visibility'),
        modalId: state.get('modal').get('mediaId')
    }
}

export default connect(mapStateToProps)(Home);