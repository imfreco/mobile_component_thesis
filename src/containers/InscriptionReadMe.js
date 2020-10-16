import React from 'react';
import {useSelector} from 'react-redux';

import {Card, DataTable, IconButton} from 'react-native-paper';

export const InscriptionReadMe = () => {
  const {inscriptions} = useSelector((state) => state.inscriptionReducer);

  const handleDelete = (inscriptionId) => {
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
              {!state && (
                <IconButton
                  icon="delete"
                  color={'#3c3c3c'}
                  size={20}
                  onPress={() => handleDelete(id)}
                />
              )}
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </Card>
  );
};
