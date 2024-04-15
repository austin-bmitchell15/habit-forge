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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getHabitDetails } from "../graphql/queries";
import { updateHabitDetails } from "../graphql/mutations";
const client = generateClient();
export default function HabitDetailsUpdateForm(props) {
  const {
    id: idProp,
    habitDetails: habitDetailsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    goal: "",
    unit: "",
    currentProgress: "",
    sessionsPerWeek: "",
    completedSessions: "",
    completed: false,
  };
  const [goal, setGoal] = React.useState(initialValues.goal);
  const [unit, setUnit] = React.useState(initialValues.unit);
  const [currentProgress, setCurrentProgress] = React.useState(
    initialValues.currentProgress
  );
  const [sessionsPerWeek, setSessionsPerWeek] = React.useState(
    initialValues.sessionsPerWeek
  );
  const [completedSessions, setCompletedSessions] = React.useState(
    initialValues.completedSessions
  );
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = habitDetailsRecord
      ? { ...initialValues, ...habitDetailsRecord }
      : initialValues;
    setGoal(cleanValues.goal);
    setUnit(cleanValues.unit);
    setCurrentProgress(cleanValues.currentProgress);
    setSessionsPerWeek(cleanValues.sessionsPerWeek);
    setCompletedSessions(cleanValues.completedSessions);
    setCompleted(cleanValues.completed);
    setErrors({});
  };
  const [habitDetailsRecord, setHabitDetailsRecord] = React.useState(
    habitDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getHabitDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getHabitDetails
        : habitDetailsModelProp;
      setHabitDetailsRecord(record);
    };
    queryData();
  }, [idProp, habitDetailsModelProp]);
  React.useEffect(resetStateValues, [habitDetailsRecord]);
  const validations = {
    goal: [],
    unit: [],
    currentProgress: [],
    sessionsPerWeek: [],
    completedSessions: [],
    completed: [],
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
          goal: goal ?? null,
          unit: unit ?? null,
          currentProgress: currentProgress ?? null,
          sessionsPerWeek: sessionsPerWeek ?? null,
          completedSessions: completedSessions ?? null,
          completed: completed ?? null,
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
            query: updateHabitDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: habitDetailsRecord.id,
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
      {...getOverrideProps(overrides, "HabitDetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Goal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={goal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              goal: value,
              unit,
              currentProgress,
              sessionsPerWeek,
              completedSessions,
              completed,
            };
            const result = onChange(modelFields);
            value = result?.goal ?? value;
          }
          if (errors.goal?.hasError) {
            runValidationTasks("goal", value);
          }
          setGoal(value);
        }}
        onBlur={() => runValidationTasks("goal", goal)}
        errorMessage={errors.goal?.errorMessage}
        hasError={errors.goal?.hasError}
        {...getOverrideProps(overrides, "goal")}
      ></TextField>
      <TextField
        label="Unit"
        isRequired={false}
        isReadOnly={false}
        value={unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              goal,
              unit: value,
              currentProgress,
              sessionsPerWeek,
              completedSessions,
              completed,
            };
            const result = onChange(modelFields);
            value = result?.unit ?? value;
          }
          if (errors.unit?.hasError) {
            runValidationTasks("unit", value);
          }
          setUnit(value);
        }}
        onBlur={() => runValidationTasks("unit", unit)}
        errorMessage={errors.unit?.errorMessage}
        hasError={errors.unit?.hasError}
        {...getOverrideProps(overrides, "unit")}
      ></TextField>
      <TextField
        label="Current progress"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={currentProgress}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              goal,
              unit,
              currentProgress: value,
              sessionsPerWeek,
              completedSessions,
              completed,
            };
            const result = onChange(modelFields);
            value = result?.currentProgress ?? value;
          }
          if (errors.currentProgress?.hasError) {
            runValidationTasks("currentProgress", value);
          }
          setCurrentProgress(value);
        }}
        onBlur={() => runValidationTasks("currentProgress", currentProgress)}
        errorMessage={errors.currentProgress?.errorMessage}
        hasError={errors.currentProgress?.hasError}
        {...getOverrideProps(overrides, "currentProgress")}
      ></TextField>
      <TextField
        label="Sessions per week"
        isRequired={false}
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
              goal,
              unit,
              currentProgress,
              sessionsPerWeek: value,
              completedSessions,
              completed,
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
              goal,
              unit,
              currentProgress,
              sessionsPerWeek,
              completedSessions: value,
              completed,
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
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              goal,
              unit,
              currentProgress,
              sessionsPerWeek,
              completedSessions,
              completed: value,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks("completed", value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks("completed", completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, "completed")}
      ></SwitchField>
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
          isDisabled={!(idProp || habitDetailsModelProp)}
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
              !(idProp || habitDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
