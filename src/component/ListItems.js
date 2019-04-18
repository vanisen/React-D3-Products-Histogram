import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';

export default ({ selectedMetric, onClick }) => (
  <List>
    <ListItem button onClick={() => { onClick('average_unit_price'); }} selected={selectedMetric === 'average_unit_price'}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Avg Unit Price" />
    </ListItem>
    <ListItem button onClick={() => { onClick('unit_sold'); }} selected={selectedMetric === 'unit_sold'}>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Units Sold" />
    </ListItem>
    <ListItem button onClick={() => { onClick('revenue_total'); }} selected={selectedMetric === 'revenue_total'}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Revenue Total" />
    </ListItem>
  </List>
);