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
                <Text>Bee-Points: 1024</Text>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'http://www.fashionfromusa.com/images/slider1.jpg'}} />
                <Body>
                  <Text>Clothes</Text>
                  <Text note>Forever 21, H&M, Zara, Nordstrom, URban Outfitters</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://retaildesignblog.net/wp-content/uploads/2012/11/VILA-Clothes-shop-by-Riis-Retail-Copenhagen-02.jpg'}} style={{height: 200, width: null, flex: 1}}/>
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
                  <Text>16 attempts blocked</Text>
                </Button>
              </Body>
              <Right>
                <Text>Bee-Points: 240</Text>
              </Right>
            </CardItem>
          </Card>
            <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.drinkaware.co.uk/media/1058/alcohol-and-bowel-cancer_drinks.jpg?anchor=center&mode=crop&width=721&height=512&rnd=131389799560000000'}} />
                <Body>
                  <Text>Alcohol</Text>
                  <Text note>Beer, wine, rum</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.eatrightontario.ca/EatRightOntario/media/Website-images-resized/Alcohol-v-2-resized.jpg'}} style={{height: 200, width: null, flex: 1}}/>
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
                <Text>Bee-Points: 2048</Text>
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
                <Text>Bee-Points: 2048</Text>
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
                <Text>Bee-Points: 634</Text>
              </Right>
            </CardItem>
          </Card>
                </Content>
      </Container>
    );
  }
}