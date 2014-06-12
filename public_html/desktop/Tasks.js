/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Ext.define('MyDesktop.Tasks', {
    extend: 'Ext.ux.desktop.Module',
    id: 'tasks',
    init: function() {
        this.launcher = {
            iconCls: 'bogus',
            handler: this.createWindow,
            scope: this
        }
    },
    createWindow: function() {
        var desktop = this.app.getDesktop();
        var win = desktop.getWindow('bogus');
        if (!win) {
            win = desktop.createWindow({
                id: 'bogus',
                title: 'Prueba de ventana',
                width: 800,
                height: 480,
                iconCls: 'bogus',
                animCollapse: false,
                constrainHeader: true,
                layout: 'border',
                 items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    split: false,
                    height: '20%',
                    itemId: 'headerPanel',
                    collapsible: true,
                    title: 'Cabecera',
                    items: [
                        {
                            xtype: 'label',
                            padding: 20,
                            text: ''
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    width: '80%',
                    split: true,
                    itemId: 'centerPanel',
                    title: 'Centro',
                    items: [
                        {
                            xtype: 'gridpanel',
                            title: 'grilla',
                           
                            columns: [
                                {
                                    xtype: 'numbercolumn',
                                    dataIndex: 'id',
                                    text: 'numero',
                                    format: '0,000'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'title',
                                    text: 'x'
                                },
                                {
                                    xtype: 'datecolumn',
                                    dataIndex: 'date',
                                    text: 'y'
                                },
                                {
                                    xtype: 'gridcolumn',
                                    dataIndex: 'boolean',
                                    text: 'z'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'west',
                    split: true,
                    itemId: 'leftPanel',
                    width: '20%',
                    bodyPadding: 10,
                    collapsible: true,
                    title:'oeste',
                    items: [
                        {
                            xtype: 'button',
                            text: 'oeste'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'east',
                    split: true,
                    itemId: 'rightPanel',
                    width: '20%',
                    bodyPadding: 10,
                    collapsible: true,
                    title: 'este',
                    items: [
                        {
                            xtype: 'cycle',
                            showText: true,
                            menu: {
                                xtype: 'menu',
                                width: 120,
                                items: [
                                    {
                                        xtype: 'menucheckitem',
                                        text: ''
                                    },
                                    {
                                        xtype: 'menucheckitem',
                                        text: ''
                                    },
                                    {
                                        xtype: 'menucheckitem',
                                        text: ''
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'south',
                    split: false,
                    height: '20%',
                    itemId: 'footerPanel',
                    collapsible: true,
                    title: 'sur'
                }
            ]
                
                
                
                
               
            });
        }
        win.show();
        return win;
    }

});

