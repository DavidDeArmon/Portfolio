import React from 'react'
import Layout from './layout'
import Header from './Header'
import Articles from './Articles'
import Footer from './Footer'
class Main extends React.Component {
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
        // this.handleClickOutside = this.handleClickOutside.bind(this)
    }
    handleOpenArticle(article) {
        this.setState({
            isArticleVisible: true,
            article
        })
    }
    handleCloseArticle() {
        if (this.state.isArticleVisible === true) {
            this.setState({
                isArticleVisible: false
            })
        }
    }
    // handleClickOutside() {
    //     if (this.state.isArticleVisible === true) {
    //         this.setState({
    //             isArticleVisible: false
    //         })
    //     }
    // }
    render() {
        return (
            <Layout location={this.props.location} >
                    <div className={`body ${this.state.isArticleVisible ? 'is-article-visible' : ''}`} role="none" id="wrapper"  onClick={this.handleCloseArticle} onKeyDown={this.handleCloseArticle}>
                        <Header onOpenArticle={this.handleOpenArticle} isArticleVisible={this.state.isArticleVisible} />
                            <Articles
                                isArticleVisible={this.state.isArticleVisible}
                                article={this.state.article}
                                onCloseArticle={this.handleCloseArticle}
                            />
                        <Footer />
                    </div>
                    <div id="bg"></div>
            </Layout>
        )
    }
}
export default Main