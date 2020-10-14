import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, DataTable} from 'react-native-paper';

export const InscriptionRead = () => {
  return (
    <Card style={styles.containerDataTable}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Fecha</DataTable.Title>
          <DataTable.Title>Estado</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>06-07-2020</DataTable.Cell>
          <DataTable.Cell>INSCRITO</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>03-02-2020</DataTable.Cell>
          <DataTable.Cell>INSCRITO</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>06-07-2019</DataTable.Cell>
          <DataTable.Cell>ADMITIDO</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>03-02-2019</DataTable.Cell>
          <DataTable.Cell>ADMITIDO</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>03-02-2018</DataTable.Cell>
          <DataTable.Cell>ADMITIDO</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
    </Card>
  );
};

const styles = StyleSheet.create({
  containerDataTable: {},
  dataTableHeader: {},
});
