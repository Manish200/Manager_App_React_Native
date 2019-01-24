import React, { Component } from 'react';
import {Text,View} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged,passwordChanged,loginUser,loginUserFail } from '../actions';
import { Card, CardSection,Input,Button,Spinner } from './common';

class LoginForm extends Component{

onEmailChange(text)
{
  this.props.emailChanged(text);
}
onPasswordChange(text)
{
  this.props.passwordChanged(text);
}
onButtonPress(){
  const { email, password} = this.props;
  this.props.loginUser({email,password});
}

renderError(){
  if(this.props.error){
    return(
      <View style={{backgroundColour:'white'}}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
      </View>
    );
  }
}


renderButton() {
  if (this.props.loading) {
    return <Spinner size="large" />;
  }

  return (
    <Button onPress={this.onButtonPress.bind(this)}>
      Login
    </Button>
  );
}

  render() {
    return(
      <View>
      <Card>
        <CardSection>
          <Input
            label = "Email"
            placeholder = "abc@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label = "Password"
            placeholder = "Password"
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>
        {this.renderButton()}
        </CardSection>
      </Card>
      </View>
    );
  }
}
const styles = {
  errorTextStyle:{
    fontSize:20,
    alignSelf:'center',
    colour:'red'
  }
}



const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};


export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm) ;
