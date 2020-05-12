#!/usr/bin/env -S deno run

import { Table } from '../../packages/table/lib/table.ts';

Table.render( [ [
    Table.from( [
             [ 'sed diam nonumy eirmod tempor invidunt ut labore.', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString()
], [
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'takimata sanctus est Lorem ipsum.', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'Stet clita kasd gubergren, no sea takimata.', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'sanctus est Lorem ipsum dolor sit.' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString()
], [
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'sed diam nonumy eirmod tempor invidunt ut labore.', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'accusam et justo duo.' ],
             [ 'cell1', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString(),
    Table.from( [
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'cell1', 'cell2', 'cell3' ],
             [ 'Stet clita kasd gubergren, no sea takimata.', 'cell2', 'cell3' ]
         ] )
         .maxCellWidth( 20 )
         .border( true )
         .toString()
] ] );