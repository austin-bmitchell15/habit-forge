/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getExercise } from "../graphql/queries";
import { updateExercise } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function ExerciseUpdateForm(props) {
  const {
    id: idProp,
    exercise: exerciseModelProp,
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
    primaryTarget: "",
    equipment: "",
    gifUrl: "",
    instructions: [],
  };
  const [name, setName] = React.useState(initialValues.name);
  const [primaryTarget, setPrimaryTarget] = React.useState(
    initialValues.primaryTarget
  );
  const [equipment, setEquipment] = React.useState(initialValues.equipment);
  const [gifUrl, setGifUrl] = React.useState(initialValues.gifUrl);
  const [instructions, setInstructions] = React.useState(
    initialValues.instructions
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = exerciseRecord
      ? { ...initialValues, ...exerciseRecord }
      : initialValues;
    setName(cleanValues.name);
    setPrimaryTarget(cleanValues.primaryTarget);
    setEquipment(cleanValues.equipment);
    setGifUrl(cleanValues.gifUrl);
    setInstructions(cleanValues.instructions ?? []);
    setCurrentInstructionsValue("");
    setErrors({});
  };
  const [exerciseRecord, setExerciseRecord] = React.useState(exerciseModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getExercise.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExercise
        : exerciseModelProp;
      setExerciseRecord(record);
    };
    queryData();
  }, [idProp, exerciseModelProp]);
  React.useEffect(resetStateValues, [exerciseRecord]);
  const [currentInstructionsValue, setCurrentInstructionsValue] =
    React.useState("");
  const instructionsRef = React.createRef();
  const validations = {
    name: [{ type: "Required" }],
    primaryTarget: [{ type: "Required" }],
    equipment: [{ type: "Required" }],
    gifUrl: [{ type: "Required" }],
    instructions: [],
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
          primaryTarget,
          equipment,
          gifUrl,
          instructions: instructions ?? null,
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
            query: updateExercise.replaceAll("__typename", ""),
            variables: {
              input: {
                id: exerciseRecord.id,
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
      {...getOverrideProps(overrides, "ExerciseUpdateForm")}
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
              primaryTarget,
              equipment,
              gifUrl,
              instructions,
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
      <TextField
        label="Primary target"
        isRequired={true}
        isReadOnly={false}
        value={primaryTarget}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              primaryTarget: value,
              equipment,
              gifUrl,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.primaryTarget ?? value;
          }
          if (errors.primaryTarget?.hasError) {
            runValidationTasks("primaryTarget", value);
          }
          setPrimaryTarget(value);
        }}
        onBlur={() => runValidationTasks("primaryTarget", primaryTarget)}
        errorMessage={errors.primaryTarget?.errorMessage}
        hasError={errors.primaryTarget?.hasError}
        {...getOverrideProps(overrides, "primaryTarget")}
      ></TextField>
      <TextField
        label="Equipment"
        isRequired={true}
        isReadOnly={false}
        value={equipment}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              primaryTarget,
              equipment: value,
              gifUrl,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.equipment ?? value;
          }
          if (errors.equipment?.hasError) {
            runValidationTasks("equipment", value);
          }
          setEquipment(value);
        }}
        onBlur={() => runValidationTasks("equipment", equipment)}
        errorMessage={errors.equipment?.errorMessage}
        hasError={errors.equipment?.hasError}
        {...getOverrideProps(overrides, "equipment")}
      ></TextField>
      <TextField
        label="Gif url"
        isRequired={true}
        isReadOnly={false}
        value={gifUrl}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              primaryTarget,
              equipment,
              gifUrl: value,
              instructions,
            };
            const result = onChange(modelFields);
            value = result?.gifUrl ?? value;
          }
          if (errors.gifUrl?.hasError) {
            runValidationTasks("gifUrl", value);
          }
          setGifUrl(value);
        }}
        onBlur={() => runValidationTasks("gifUrl", gifUrl)}
        errorMessage={errors.gifUrl?.errorMessage}
        hasError={errors.gifUrl?.hasError}
        {...getOverrideProps(overrides, "gifUrl")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              primaryTarget,
              equipment,
              gifUrl,
              instructions: values,
            };
            const result = onChange(modelFields);
            values = result?.instructions ?? values;
          }
          setInstructions(values);
          setCurrentInstructionsValue("");
        }}
        currentFieldValue={currentInstructionsValue}
        label={"Instructions"}
        items={instructions}
        hasError={errors?.instructions?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("instructions", currentInstructionsValue)
        }
        errorMessage={errors?.instructions?.errorMessage}
        setFieldValue={setCurrentInstructionsValue}
        inputFieldRef={instructionsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Instructions"
          isRequired={false}
          isReadOnly={false}
          value={currentInstructionsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.instructions?.hasError) {
              runValidationTasks("instructions", value);
            }
            setCurrentInstructionsValue(value);
          }}
          onBlur={() =>
            runValidationTasks("instructions", currentInstructionsValue)
          }
          errorMessage={errors.instructions?.errorMessage}
          hasError={errors.instructions?.hasError}
          ref={instructionsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "instructions")}
        ></TextField>
      </ArrayField>
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
          isDisabled={!(idProp || exerciseModelProp)}
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
              !(idProp || exerciseModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
