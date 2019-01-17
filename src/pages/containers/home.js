import React from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/componets/categories';

class Home extends React.Component{
    render(){
        return(
            <HomeLayout>
                <Categories categories={ this.props.data.categories } />
            </HomeLayout>
        )
    }
}

export default Home;