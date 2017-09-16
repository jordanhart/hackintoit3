import React, { Component } from 'react';
import { Image } from 'react-native';
import { Title,Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>BeeBlocks</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://genesistransformation.files.wordpress.com/2014/11/coffee.jpg'}} />
                <Body>
                  <Text>Coffee</Text>
                  <Text note>Starbucks</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.nobrowcoffee.com/wp-content/uploads/2016/04/coffee-wallpaper-1306-1433-hd-wallpapers.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="flame" />
                  <Text>Block</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>12 attempts blocked</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://genesistransformation.files.wordpress.com/2014/11/coffee.jpg'}} />
                <Body>
                  <Text>Dessert</Text>
                  <Text note>Icecream shops, donut shops, etc</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://images.girlslife.com/image.axd?i=91125'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="flame" />
                  <Text>Block</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>6 attempts blocked</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://cdn.shopify.com/s/files/1/0604/1061/products/boba_9ee88c01-a8a8-49ef-91d3-f135db6f4151_grande.jpg?v=1490839761'}} />
                <Body>
                  <Text>Boba</Text>
                  <Text note>Quickly, sweetheart</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.frootbubbles.com/assets/images/bubble-tea-mix-supplies-1280x674-93.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="flame" />
                  <Text>Block</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon name="chatbubbles" />
                  <Text>24 attempts blocked</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}