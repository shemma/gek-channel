import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Grid, Segment, Container, Embed, Card, Icon, Image } from 'semantic-ui-react';

const videoCollection = [
  {
    id: 'ZaqZIPNUC20',
    img: `https://img.youtube.com/vi/ZaqZIPNUC20/mqdefault.jpg`,
    published: 'Published on Oct 22, 2018',
    label: 'Legendary Commander PLEASE (#2) - Rise of Civilizations'
  },
  {
    id: 'NZf1BRQEHpY',
    img: `https://img.youtube.com/vi/NZf1BRQEHpY/mqdefault.jpg`,
    published: 'Published on Oct 21, 2018',
    label: 'Alliance System Explained - Rise of Civilizations'
  },
  {
    id: 'UuB0Baq0bFg',
    img: `https://img.youtube.com/vi/UuB0Baq0bFg/mqdefault.jpg`,
    published: 'Published on Oct 17, 2018',
    label: 'My First Alliance Fight - Rise of Civilizations'
  },
  {
    id: 'kCOIlvgb_lA',
    img: `https://img.youtube.com/vi/kCOIlvgb_lA/mqdefault.jpg`,
    published: 'Published on Oct 15, 2018',
    label: 'Dos and Donts to maximize your time and Growth - Rise of Civilizations'
  }
];

class App extends Component {
  renderVideoList = () => {
    const cardList = videoCollection.map(video => {
      return (
        <Card>
          <Embed id={video.id} placeholder={video.img} source="youtube" />
          <Card.Content>
            <Card.Meta>
              <span className="date">{video.published}</span>
            </Card.Meta>
            <Card.Description>{video.label}</Card.Description>
          </Card.Content>
        </Card>
      );
    });

    return cardList;
  };

  render() {
    return (
      <div style={{ background: 'black', height: '9rem' }}>
        <Container style={{ paddingTop: '1.5rem' }}>
          <Image src={logo} size="tiny" circular />
        </Container>
        <Grid relaxed>
          <Grid.Row>
            <Grid.Column width={3}>
              <Container fluid style={{ padding: '4rem' }}>
                {this.renderVideoList()}
              </Container>
            </Grid.Column>
            <Grid.Column width={9}>
              <Container fluid style={{ paddingTop: '4rem', paddingLeft: '10rem' }}>
                <Embed id={videoCollection[0].id} placeholder={videoCollection[0].img} source="youtube" />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
