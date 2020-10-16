import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {Card, DataTable, IconButton} from 'react-native-paper';
import {startInscriptionRead} from '../actions/inscription.action';

export const InscriptionRead = () => {
  const {inscriptions} = useSelector((state) => state.inscriptionReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startInscriptionRead());
  }, [dispatch]);

  const handleAdmit = (inscriptionId) => {
    console.log(inscriptionId);
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
                icon="clipboard-check" //delete
                color={'#3c3c3c'}
                size={20}
                onPress={() => handleAdmit(id)}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};
