import { TreeNode } from 'primeng/api';
import { LocationTreeTableItemModel } from './location-tree-table-item.model';

export class LocationTreeTableNodeModel implements TreeNode {

    data: LocationTreeTableItemModel;
    children?: Array<LocationTreeTableNodeModel>;
    leaf?: boolean;
    expanded?: boolean;


    constructor() {
        this.children = new Array<LocationTreeTableNodeModel>();
    }

}
