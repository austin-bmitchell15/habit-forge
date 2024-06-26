/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from 'react';
import { Button, Flex, Grid, TextField } from '@aws-amplify/ui-react';
import { fetchByPath, getOverrideProps, validateField } from './utils';
import { generateClient } from 'aws-amplify/api';
import { getExerciseHistory } from '../graphql/queries';
import { updateExerciseHistory } from '../graphql/mutations';
const client = generateClient();
export default function ExerciseHistoryUpdateForm(props) {
  const {
    id: idProp,
    exerciseHistory: exerciseHistoryModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    sets: '',
    reps: '',
    weight: '',
  };
  const [sets, setSets] = React.useState(initialValues.sets);
  const [reps, setReps] = React.useState(initialValues.reps);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = exerciseHistoryRecord
      ? { ...initialValues, ...exerciseHistoryRecord }
      : initialValues;
    setSets(cleanValues.sets);
    setReps(cleanValues.reps);
    setWeight(cleanValues.weight);
    setErrors({});
  };
  const [exerciseHistoryRecord, setExerciseHistoryRecord] = React.useState(
    exerciseHistoryModelProp,
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExerciseHistory.replaceAll('__typename', ''),
              variables: { id: idProp },
            })
          )?.data?.getExerciseHistory
        : exerciseHistoryModelProp;
      setExerciseHistoryRecord(record);
    };
    queryData();
  }, [idProp, exerciseHistoryModelProp]);
  React.useEffect(resetStateValues, [exerciseHistoryRecord]);
  const validations = {
    sets: [{ type: 'Required' }],
    reps: [{ type: 'Required' }],
    weight: [{ type: 'Required' }],
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
          sets,
          reps,
          weight,
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
            query: updateExerciseHistory.replaceAll('__typename', ''),
            variables: {
              input: {
                id: exerciseHistoryRecord.id,
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
      {...getOverrideProps(overrides, 'ExerciseHistoryUpdateForm')}
      {...rest}
    >
      <TextField
        label="Sets"
        isRequired={true}
        isReadOnly={false}
        value={sets}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sets: value,
              reps,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.sets ?? value;
          }
          if (errors.sets?.hasError) {
            runValidationTasks('sets', value);
          }
          setSets(value);
        }}
        onBlur={() => runValidationTasks('sets', sets)}
        errorMessage={errors.sets?.errorMessage}
        hasError={errors.sets?.hasError}
        {...getOverrideProps(overrides, 'sets')}
      ></TextField>
      <TextField
        label="Reps"
        isRequired={true}
        isReadOnly={false}
        value={reps}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sets,
              reps: value,
              weight,
            };
            const result = onChange(modelFields);
            value = result?.reps ?? value;
          }
          if (errors.reps?.hasError) {
            runValidationTasks('reps', value);
          }
          setReps(value);
        }}
        onBlur={() => runValidationTasks('reps', reps)}
        errorMessage={errors.reps?.errorMessage}
        hasError={errors.reps?.hasError}
        {...getOverrideProps(overrides, 'reps')}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={true}
        isReadOnly={false}
        value={weight}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sets,
              reps,
              weight: value,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks('weight', value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks('weight', weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, 'weight')}
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
          isDisabled={!(idProp || exerciseHistoryModelProp)}
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
              !(idProp || exerciseHistoryModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
