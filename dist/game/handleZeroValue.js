import { gameState } from '../app.js';
import { openField } from '../render/openField.js';
import { getPartFieldMap } from './getPartFieldMap.js';
export const handleZeroValue = (fieldmap, index, rowIndex) => {
    const PartFieldMap = getPartFieldMap(rowIndex, index, gameState.gameFieldsMap);
    PartFieldMap.forEach((row) => {
        row.rowFields.forEach((field) => {
            if (field.field.fieldValue === 0) {
                if (!field.field.isOpen) {
                    openField(row.rowIndex, field.index, '');
                    handleZeroValue(fieldmap, field.index, row.rowIndex);
                }
            }
            if (field.field.fieldValue !== 'mine' && field.field.fieldValue > 0) {
                openField(row.rowIndex, field.index, field.field.fieldValue);
            }
        });
    });
};
