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
import { getGeneralHabit } from '../graphql/queries';
import { updateGeneralHabit } from '../graphql/mutations';
const client = generateClient();
export default function GeneralHabitUpdateForm(props) {
  const {
    id: idProp,
    generalHabit: generalHabitModelProp,
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
  };
  const [name, setName] = React.useState(initialValues.name);
  const [type, setType] = React.useState(initialValues.type);
  const [completed, setCompleted] = React.useState(initialValues.completed);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = generalHabitRecord
      ? { ...initialValues, ...generalHabitRecord }
      : initialValues;
    setName(cleanValues.name);
    setType(cleanValues.type);
    setCompleted(cleanValues.completed);
    setErrors({});
  };
  const [generalHabitRecord, setGeneralHabitRecord] = React.useState(
    generalHabitModelProp,
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGeneralHabit.replaceAll('__typename', ''),
              variables: { id: idProp },
            })
          )?.data?.getGeneralHabit
        : generalHabitModelProp;
      setGeneralHabitRecord(record);
    };
    queryData();
  }, [idProp, generalHabitModelProp]);
  React.useEffect(resetStateValues, [generalHabitRecord]);
  const validations = {
    name: [{ type: 'Required' }],
    type: [{ type: 'Required' }],
    completed: [],
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
          completed: completed ?? null,
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
            query: updateGeneralHabit.replaceAll('__typename', ''),
            variables: {
              input: {
                id: generalHabitRecord.id,
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
      {...getOverrideProps(overrides, 'GeneralHabitUpdateForm')}
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
          isDisabled={!(idProp || generalHabitModelProp)}
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
              !(idProp || generalHabitModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, 'SubmitButton')}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}