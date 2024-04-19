/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from '@aws-amplify/ui-react';
import { fetchByPath, getOverrideProps, validateField } from './utils';
import { generateClient } from 'aws-amplify/api';
import { getProgressiveHabit } from '../graphql/queries';
import { updateProgressiveHabit } from '../graphql/mutations';
const client = generateClient();
export default function ProgressiveHabitUpdateForm(props) {
  const {
    id: idProp,
    progressiveHabit: progressiveHabitModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: '',
    type: '',
    goal: '',
    unit: '',
    currentProgress: '',
    lastCompleted: '',
    streak: '',
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [goal, setGoal] = React.useState(initialValues.goal);
  const [unit, setUnit] = React.useState(initialValues.unit);
  const [currentProgress, setCurrentProgress] = React.useState(
    initialValues.currentProgress,
  );
  const [lastCompleted, setLastCompleted] = React.useState(
    initialValues.lastCompleted,
  );
  const [streak, setStreak] = React.useState(initialValues.streak);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = progressiveHabitRecord
      ? { ...initialValues, ...progressiveHabitRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setGoal(cleanValues.goal);
    setUnit(cleanValues.unit);
    setCurrentProgress(cleanValues.currentProgress);
    setLastCompleted(cleanValues.lastCompleted);
    setStreak(cleanValues.streak);
    setErrors({});
  };
  const [progressiveHabitRecord, setProgressiveHabitRecord] = React.useState(
    progressiveHabitModelProp,
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getProgressiveHabit.replaceAll('__typename', ''),
              variables: { id: idProp },
            })
          )?.data?.getProgressiveHabit
        : progressiveHabitModelProp;
      setProgressiveHabitRecord(record);
    };
    queryData();
  }, [idProp, progressiveHabitModelProp]);
  React.useEffect(resetStateValues, [progressiveHabitRecord]);
  const validations = {
    name: [{ type: 'Required' }],
    type: [{ type: 'Required' }],
    goal: [{ type: 'Required' }],
    unit: [{ type: 'Required' }],
    currentProgress: [],
    lastCompleted: [],
    streak: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue,
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
          goal,
          unit,
          currentProgress: currentProgress ?? null,
          lastCompleted: lastCompleted ?? null,
          streak: streak ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item),
                ),
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName]),
            );
            return promises;
          }, []),
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === 'string' && value === '') {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateProgressiveHabit.replaceAll('__typename', ''),
            variables: {
              input: {
                id: progressiveHabitRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n');
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, 'ProgressiveHabitUpdateForm')}
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
              goal,
              unit,
              currentProgress,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks('name', value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks('name', name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, 'name')}
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
              goal,
              unit,
              currentProgress,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks('type', value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks('type', type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, 'type')}
      >
        <option
          children="Progressive"
          value="PROGRESSIVE"
          {...getOverrideProps(overrides, 'typeoption0')}
        ></option>
        <option
          children="Activity"
          value="ACTIVITY"
          {...getOverrideProps(overrides, 'typeoption1')}
        ></option>
        <option
          children="General"
          value="GENERAL"
          {...getOverrideProps(overrides, 'typeoption2')}
        ></option>
      </SelectField>
      <TextField
        label="Goal"
        isRequired={true}
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
              name,
              type,
              goal: value,
              unit,
              currentProgress,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.goal ?? value;
          }
          if (errors.goal?.hasError) {
            runValidationTasks('goal', value);
          }
          setGoal(value);
        }}
        onBlur={() => runValidationTasks('goal', goal)}
        errorMessage={errors.goal?.errorMessage}
        hasError={errors.goal?.hasError}
        {...getOverrideProps(overrides, 'goal')}
      ></TextField>
      <TextField
        label="Unit"
        isRequired={true}
        isReadOnly={false}
        value={unit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              type,
              goal,
              unit: value,
              currentProgress,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.unit ?? value;
          }
          if (errors.unit?.hasError) {
            runValidationTasks('unit', value);
          }
          setUnit(value);
        }}
        onBlur={() => runValidationTasks('unit', unit)}
        errorMessage={errors.unit?.errorMessage}
        hasError={errors.unit?.hasError}
        {...getOverrideProps(overrides, 'unit')}
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
              name,
              type,
              goal,
              unit,
              currentProgress: value,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.currentProgress ?? value;
          }
          if (errors.currentProgress?.hasError) {
            runValidationTasks('currentProgress', value);
          }
          setCurrentProgress(value);
        }}
        onBlur={() => runValidationTasks('currentProgress', currentProgress)}
        errorMessage={errors.currentProgress?.errorMessage}
        hasError={errors.currentProgress?.hasError}
        {...getOverrideProps(overrides, 'currentProgress')}
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
              goal,
              unit,
              currentProgress,
              lastCompleted: value,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.lastCompleted ?? value;
          }
          if (errors.lastCompleted?.hasError) {
            runValidationTasks('lastCompleted', value);
          }
          setLastCompleted(value);
        }}
        onBlur={() => runValidationTasks('lastCompleted', lastCompleted)}
        errorMessage={errors.lastCompleted?.errorMessage}
        hasError={errors.lastCompleted?.hasError}
        {...getOverrideProps(overrides, 'lastCompleted')}
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
              goal,
              unit,
              currentProgress,
              lastCompleted,
              streak: value,
            };
            const result = onChange(modelFields);
            value = result?.streak ?? value;
          }
          if (errors.streak?.hasError) {
            runValidationTasks('streak', value);
          }
          setStreak(value);
        }}
        onBlur={() => runValidationTasks('streak', streak)}
        errorMessage={errors.streak?.errorMessage}
        hasError={errors.streak?.hasError}
        {...getOverrideProps(overrides, 'streak')}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, 'CTAFlex')}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || progressiveHabitModelProp)}
          {...getOverrideProps(overrides, 'ResetButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || progressiveHabitModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
