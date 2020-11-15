import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Alert} from 'react-native';
import {Card, DataTable, IconButton} from 'react-native-paper';

import {
  startInscriptionDelete,
  startInscriptionsReadMe,
} from '../actions/inscription.action';
import {setTitleNavbar} from '../actions/ui.action';

export const InscriptionReadMe = () => {
  const {inscriptions} = useSelector((state) => state.inscriptionReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleNavbar('Mis inscripciones'));
    dispatch(startInscriptionsReadMe());
  }, [dispatch]);

  const handleDelete = (inscriptionId) => {
    Alert.alert('Responder', '¿Acepta eliminar esta inscripción?', [
      {
        text: 'Aceptar',
        onPress: () => {
          dispatch(startInscriptionDelete(inscriptionId));
        },
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  return (
    <Card>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Fecha</DataTable.Title>
          <DataTable.Title>Estado</DataTable.Title>
          <DataTable.Title>Acciones</DataTable.Title>
        </DataTable.Header>

        {inscriptions.map(({id, createdAt, state}) => (
          <DataTable.Row key={id}>
            <DataTable.Cell>
              {`${new Date(createdAt).getFullYear()}-${
                new Date(createdAt).getMonth() + 1
              }-${new Date(createdAt).getDate()}`}
            </DataTable.Cell>
            <DataTable.Cell>{state ? 'ADMITIDO' : 'INSCRITO'}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton
                icon="delete"
                color={'#3c3c3c'}
                size={20}
                onPress={() => handleDelete(id)}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};
