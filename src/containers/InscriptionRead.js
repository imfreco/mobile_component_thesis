import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Alert} from 'react-native';
import {Card, DataTable, IconButton} from 'react-native-paper';

import {
  startInscriptionAdmit,
  startInscriptionsRead,
} from '../actions/inscription.action';
import {setTitleNavbar} from '../actions/ui.action';

export const InscriptionRead = () => {
  const {inscriptions} = useSelector((state) => state.inscriptionReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTitleNavbar('Inscripciones'));
    dispatch(startInscriptionsRead());
  }, [dispatch]);

  const handleAdmit = (inscriptionId) => {
    Alert.alert('Responder', '¿Acepta admitir esta inscripción?', [
      {
        text: 'Aceptar',
        onPress: () => {
          dispatch(startInscriptionAdmit(inscriptionId));
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
              {!state && (
                <IconButton
                  icon="clipboard-check"
                  color={'#3c3c3c'}
                  size={20}
                  onPress={() => handleAdmit(id)}
                />
              )}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};
