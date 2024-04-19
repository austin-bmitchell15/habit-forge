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
  SwitchField,
  TextField,
} from '@aws-amplify/ui-react';
import { fetchByPath, getOverrideProps, validateField } from './utils';
import { generateClient } from 'aws-amplify/api';
import { createGeneralHabit } from '../graphql/mutations';
const client = generateClient();
export default function GeneralHabitCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    completed: false,
    lastCompleted: '',
    streak: '',
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [lastCompleted, setLastCompleted] = React.useState(
    initialValues.lastCompleted,
  );
  const [streak, setStreak] = React.useState(initialValues.streak);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setType(initialValues.type);
    setCompleted(initialValues.completed);
    setLastCompleted(initialValues.lastCompleted);
    setStreak(initialValues.streak);
    setErrors({});
  };
  const validations = {
    name: [{ type: 'Required' }],
    type: [{ type: 'Required' }],
    completed: [],
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
          completed,
          lastCompleted,
          streak,
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
            query: createGeneralHabit.replaceAll('__typename', ''),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join('\n');
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, 'GeneralHabitCreateForm')}
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
              completed,
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
              completed,
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
      <SwitchField
        label="Completed"
        defaultChecked={false}
        isDisabled={false}
        isChecked={completed}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              type,
              completed: value,
              lastCompleted,
              streak,
            };
            const result = onChange(modelFields);
            value = result?.completed ?? value;
          }
          if (errors.completed?.hasError) {
            runValidationTasks('completed', value);
          }
          setCompleted(value);
        }}
        onBlur={() => runValidationTasks('completed', completed)}
        errorMessage={errors.completed?.errorMessage}
        hasError={errors.completed?.hasError}
        {...getOverrideProps(overrides, 'completed')}
      ></SwitchField>
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
              completed,
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
              completed,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, 'ClearButton')}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, 'RightAlignCTASubFlex')}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
