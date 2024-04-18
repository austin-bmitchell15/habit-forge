/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getActivityHabit } from "../graphql/queries";
import { updateActivityHabit } from "../graphql/mutations";
const client = generateClient();
export default function ActivityHabitUpdateForm(props) {
  const {
    id: idProp,
    activityHabit: activityHabitModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    type: "",
    sessionsPerWeek: "",
    completedSessions: "",
    lastCompleted: "",
    streak: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [sessionsPerWeek, setSessionsPerWeek] = React.useState(
    initialValues.sessionsPerWeek
  );
  const [completedSessions, setCompletedSessions] = React.useState(
    initialValues.completedSessions
  );
  const [lastCompleted, setLastCompleted] = React.useState(
    initialValues.lastCompleted
  );
  const [streak, setStreak] = React.useState(initialValues.streak);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = activityHabitRecord
      ? { ...initialValues, ...activityHabitRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setSessionsPerWeek(cleanValues.sessionsPerWeek);
    setCompletedSessions(cleanValues.completedSessions);
    setLastCompleted(cleanValues.lastCompleted);
    setStreak(cleanValues.streak);
    setErrors({});
  };
  const [activityHabitRecord, setActivityHabitRecord] = React.useState(
    activityHabitModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getActivityHabit.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getActivityHabit
        : activityHabitModelProp;
      setActivityHabitRecord(record);
    };
    queryData();
  }, [idProp, activityHabitModelProp]);
  React.useEffect(resetStateValues, [activityHabitRecord]);
  const validations = {
    name: [{ type: "Required" }],
    type: [{ type: "Required" }],
    sessionsPerWeek: [{ type: "Required" }],
    completedSessions: [],
    lastCompleted: [],
    streak: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          type,
          sessionsPerWeek,
          completedSessions: completedSessions ?? null,
          lastCompleted: lastCompleted ?? null,
          streak: streak ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateActivityHabit.replaceAll("__typename", ""),
            variables: {
              input: {
                id: activityHabitRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ActivityHabitUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              type,
              sessionsPerWeek,
              completedSessions,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <SelectField
        label="Type"
        placeholder="Please select an option"
        isDisabled={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type: value,
              sessionsPerWeek,
              completedSessions,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      >
        <option
          children="Progressive"
          value="PROGRESSIVE"
          {...getOverrideProps(overrides, "typeoption0")}
        ></option>
        <option
          children="Activity"
          value="ACTIVITY"
          {...getOverrideProps(overrides, "typeoption1")}
        ></option>
        <option
          children="General"
          value="GENERAL"
          {...getOverrideProps(overrides, "typeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Sessions per week"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sessionsPerWeek}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              sessionsPerWeek: value,
              completedSessions,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.sessionsPerWeek ?? value;
          }
          if (errors.sessionsPerWeek?.hasError) {
            runValidationTasks("sessionsPerWeek", value);
          }
          setSessionsPerWeek(value);
        }}
        onBlur={() => runValidationTasks("sessionsPerWeek", sessionsPerWeek)}
        errorMessage={errors.sessionsPerWeek?.errorMessage}
        hasError={errors.sessionsPerWeek?.hasError}
        {...getOverrideProps(overrides, "sessionsPerWeek")}
      ></TextField>
      <TextField
        label="Completed sessions"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={completedSessions}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              sessionsPerWeek,
              completedSessions: value,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.completedSessions ?? value;
          }
          if (errors.completedSessions?.hasError) {
            runValidationTasks("completedSessions", value);
          }
          setCompletedSessions(value);
        }}
        onBlur={() =>
          runValidationTasks("completedSessions", completedSessions)
        }
        errorMessage={errors.completedSessions?.errorMessage}
        hasError={errors.completedSessions?.hasError}
        {...getOverrideProps(overrides, "completedSessions")}
      ></TextField>
      <TextField
        label="Last completed"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={lastCompleted}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              sessionsPerWeek,
              completedSessions,
              lastCompleted: value,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.lastCompleted ?? value;
          }
          if (errors.lastCompleted?.hasError) {
            runValidationTasks("lastCompleted", value);
          }
          setLastCompleted(value);
        }}
        onBlur={() => runValidationTasks("lastCompleted", lastCompleted)}
        errorMessage={errors.lastCompleted?.errorMessage}
        hasError={errors.lastCompleted?.hasError}
        {...getOverrideProps(overrides, "lastCompleted")}
      ></TextField>
      <TextField
        label="Streak"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={streak}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              type,
              sessionsPerWeek,
              completedSessions,
              lastCompleted,
              streak: value,
            };
            const result = onChange(modelFields);
            value = result?.streak ?? value;
          }
          if (errors.streak?.hasError) {
            runValidationTasks("streak", value);
          }
          setStreak(value);
        }}
        onBlur={() => runValidationTasks("streak", streak)}
        errorMessage={errors.streak?.errorMessage}
        hasError={errors.streak?.hasError}
        {...getOverrideProps(overrides, "streak")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || activityHabitModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || activityHabitModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
