import React, { Component } from "react";
import { View, FlatList } from "react-native";
import moment from "moment";
import { MainHeader } from "../../../components/commons/headers";
import ListHeader from "./list/Header";
import withContext from "../../../components/hocs/withContext";
import {
  QuestionsContainer,
  QuestionsContentContainer,
  PromptText,
} from "./styles";
import Card from "./list/Card";

class DailyQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format("DD-MM-YYYY"),
      parsedDate: moment().format(),
      questions: [
        { question: "Test", rating: 5 },
        { question: "Two qustion", rating: 3 },
      ],
      today: true,
    };
  }

  checkDate = () => {
    const { parsedDate } = this.state;
    const current = moment(parsedDate);
    const today = moment();
    if (current.isSame(today, "day")) this.setState({ today: true });
    else this.setState({ today: false });
  };

  getQuestions = () => {
    console.log("here");
  };

  goBack = () => {
    const { parsedDate } = this.state;
    const newDate = moment(parsedDate)
      .subtract(1, "days")
      .format("DD-MM-YYYY");
    const newParsedDate = moment(parsedDate)
      .subtract(1, "days")
      .format();
    this.setState({ date: newDate, parsedDate: newParsedDate }, () => {
      this.checkDate();
      this.getQuestions();
    });
  };

  goForward = () => {
    const { parsedDate } = this.state;
    const newDate = moment(parsedDate)
      .add(1, "days")
      .format("DD-MM-YYYY");
    const newParsedDate = moment(parsedDate)
      .add(1, "days")
      .format();
    this.setState({ date: newDate, parsedDate: newParsedDate }, () => {
      this.checkDate();
      this.getQuestions();
    });
  };

  pickDate = date => {
    const parsedDate = moment(date).format();

    const newDate = moment(parsedDate).format("DD-MM-YYYY");

    this.setState({ date: newDate, parsedDate }, () => {
      this.checkDate();
      this.getQuestions();
    });
  };

  render() {
    const { date, parsedDate, questions, today } = this.state;
    const {
      navigation: { navigate },
      sessionContext: {
        theme: {
          iconColor,
          backgroundColor,
          whiteColor,
          primaryColor,
          secondaryColor,
        },
        appText: {
          questionsTitle,
          confirmText,
          cancelText,
          selectDateText,
          prompt,
        },
      },
    } = this.props;
    return (
      <View style={{ backgroundColor: primaryColor, flex: 1 }}>
        <MainHeader
          backgroundColor={primaryColor}
          iconColor={whiteColor}
          title={questionsTitle}
          showIcon
          iconAction={() => navigate("Title")}
        />

        <ListHeader
          whiteColor={whiteColor}
          iconColor={iconColor}
          primaryColor={primaryColor}
          date={date}
          confirmText={confirmText}
          cancelText={cancelText}
          selectDateText={selectDateText}
          parsedDate={parsedDate}
          goForward={() => this.goForward()}
          goBack={() => this.goBack()}
          pickDate={d => this.pickDate(d)}
        />
        <QuestionsContainer backgroundColor={backgroundColor}>
          <QuestionsContentContainer backgroundColor={backgroundColor}>
            <PromptText color={secondaryColor}>{prompt}</PromptText>
            <FlatList
              data={questions}
              style={{ flex: 1 }}
              renderItem={({ item }) => (
                <Card
                  item={item}
                  navigate={navigate}
                  backgroundColor={whiteColor}
                  primaryColor={primaryColor}
                  today={today}
                />
              )}
              keyExtractor={(i, index) => index.toString()}
            />
          </QuestionsContentContainer>
        </QuestionsContainer>
      </View>
    );
  }
}

export default withContext(DailyQuestions);
