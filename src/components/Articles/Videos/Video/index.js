import React, { Component } from 'react';
import { firebaseDB, firebaseTeams, firebaseLooper, firebaseVideos}  from '../../../../firebase';
import '../../articles.css';
import Header from './header';
import VideosRelated from '../../../widgets/VideosList/videosRelated/videosRelated';

class VideoArticle extends Component {
    state = {
        article: [],
        team: [],
        teams: [],
        related: []
    }

    componentWillMount() {
        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then((snapshot) => {
            let article = snapshot.val();
            firebaseTeams.orderByChild('id').equalTo(article.team).once('value')
            .then((snapshot) => {
                const team = firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                });
                this.getRelated();
            })
        })
    }
    
    getRelated = () => {
        firebaseTeams.once('value')
        .then((snapshot) => {
            const teams = firebaseLooper(snapshot);
            
            firebaseVideos
            .orderByChild('team')
            .equalTo(this.state.article.team)
            .limitToFirst(3)
            .once('value')
            .then((snapshot) => {
                const related = firebaseLooper(snapshot);
                this.setState({
                    teams,
                    related
                })
            })

        })
    }
    render() {
        const team = this.state.team;
        const article = this.state.article;
        return (
            <div>
                <Header teamData={team[0]}/>
                <div className="videoWrapper">
                    <h1>{article.title}</h1>
                    <iframe
                        title="videoplayer"
                        width="100%"
                        height="300px"
                        src={`https://youtube.com/embed/${article.url}`}
                    >
                    </iframe>
                </div>
                <VideosRelated
                data={this.state.related} 
                teams={this.state.teams}/>
            </div>
        )
    }
}

export default VideoArticle;