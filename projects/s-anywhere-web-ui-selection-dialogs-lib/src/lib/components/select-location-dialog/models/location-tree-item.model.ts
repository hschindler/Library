import { TreeNode } from 'primeng/api';

export class LocationTreeItemModel implements TreeNode {

    data: string;
    children: Array<LocationTreeItemModel>;
    leaf?: boolean;
    expanded?: boolean;

    expandedIcon: string;
    collapsedIcon: string;

    label: string;
    path: string;

    constructor() {
        this.children = new Array<LocationTreeItemModel>();
        this.path = '';
    }

}
