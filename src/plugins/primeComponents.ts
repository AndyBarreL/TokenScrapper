/* eslint-disable vue/multi-word-component-names */
import { App } from "vue";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Image from "primevue/image";

export default {
  install: (app: App<Element>) => {
    app.component("TabView", TabView);
    app.component("TabPanel", TabPanel);
    app.component("DataTable", DataTable);
    app.component("DataColumn", Column);
    app.component("PrimeCard", Card);
    app.component("PrimeButton", Button);
    app.component("InputText", InputText);
    app.component("Image", Image);
  },
};
