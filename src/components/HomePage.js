import React from 'react'
import Layout from '../components/layout'
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isArticleVisible: false,
            timeout: false,
            articleTimeout: false,
            article: '',
            loading: 'is-loading'
        }
        this.handleOpenArticle = this.handleOpenArticle.bind(this)
        this.handleCloseArticle = this.handleCloseArticle.bind(this)
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: true,
            article
        })
    }
    handleCloseArticle() {
        this.setState({
            isArticleVisible: false
        })
    }
    handleClickOutside() {
    if(this.state.isArticleVisible === true){
        this.setState({
        isArticleVisible: false
        })
    }
    }
    handleClickInside(e) {
    e.stopPropagation()
    }
    render() {
        return(
            <Layout location={this.props.location}>
                <div   className={`body ${this.state.isArticleVisible ? 'is-article-visible' : ''}`}>
                    <div role="none" id="wrapper" onClick={this.handleClickOutside} onKeyDown={this.handleClickOutside} >
                        <Header onOpenArticle={this.handleOpenArticle} isArticleVisible={this.state.isArticleVisible}/>
                        <div role="none" onClick={(e)=>this.handleClickInside(e)} onKeyDown={(e)=>this.handleClickInside(e)} >
                            <Main
                                isArticleVisible={this.state.isArticleVisible}
                                article={this.state.article}
                                onCloseArticle={this.handleCloseArticle}
                            />
                        </div>
                        <Footer />
                    </div>
                    <div id="bg"></div>
                </div>
            </Layout>
        )
    }
}
export default HomePage