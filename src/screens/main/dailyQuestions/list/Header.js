import React, { useEffect } from "react";
import DatePicker from "react-native-datepicker";
import moment from "moment";
import Icon from "react-native-vector-icons/MaterialIcons";
import CommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { QuestionsHeader, IconContainer, DateText } from "../styles";

const List = ({
  whiteColor,
  iconColor,
  parsedDate,
  date,
  goForward,
  goBack,
  pickDate,
  confirmText,
  cancelText,
  selectDateText,
  primaryColor,
}) => {
  function getMinDate() {
    const minDate = moment(parsedDate)
      .subtract(30, "days")
      .format("YYYY-MM-DD");

    return minDate;
  }
  function getMaxDate() {
    const maxDate = moment(parsedDate)
      .add(7, "days")
      .format("YYYY-MM-DD");

    return maxDate;
  }

  useEffect(() => {
    console.log(parsedDate);
  }, [parsedDate]);

  return (
    <QuestionsHeader backgroundColor={whiteColor}>
      <IconContainer>
        <Icon
          name={"chevron-left"}
          size={30}
          color={iconColor}
          onPress={() => goBack()}
        />
      </IconContainer>
      <DatePicker
        style={{ width: 200 }}
        date={date}
        mode="date"
        placeholder={selectDateText}
        format="DD-MM-YYYY"
        minDate={getMinDate()}
        maxDate={getMaxDate()}
        confirmBtnText={confirmText}
        cancelBtnText={cancelText}
        iconComponent={
          <CommunityIcon
            name={"calendar-range"}
            size={30}
            style={{
              left: 0,
              marginLeft: 0,
              position: "absolute",
            }}
            color={primaryColor}
          />
        }
        customStyles={{
          dateInput: {
            borderColor: "none",
            borderWidth: 0,
          },
          dateText: {
            color: primaryColor,
            fontSize: 16,
            marginLeft: 20,
          },
          dateTouchBody: {
            alignSelf: "center",
            justifyContent: "center",
            width: 150,
          },
        }}
        onDateChange={d => {
          pickDate(d);
        }}
      />

      <IconContainer>
        <Icon
          name={"chevron-right"}
          size={30}
          color={iconColor}
          onPress={() => goForward()}
        />
      </IconContainer>
    </QuestionsHeader>
  );
};

export default List;
