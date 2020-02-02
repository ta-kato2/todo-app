import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert,Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form'


const TaskCreate = (props) => {
    const [title, setTitle] = useState(null);
   const { register, setValue, handleSubmit, errors } = useForm();
    const onSubmit = () => {
          props.route.params.createTask({
                                        id: 999,
                                         title: title,
                                         completed: false
                                        });
    };

    return (
        <View>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
              value={title}
              ref={register({name: 'title'}, {required: true})}
              onChange={(event) => {
              console.log(event.nativeEvent.text)
                  setTitle(event.nativeEvent.text);
                  setValue('title', event.nativeEvent.text);
              }}
              placeHolder={'タイトルを入力してください'}
            />
            {errors.title && <Text>タイトルは必須です</Text>}
            <Button
               title="作成する"
               onPress={handleSubmit(onSubmit)}
            />
        </View>
    );
};

export default TaskCreate;

