// stores/automations.js
import { defineStore } from 'pinia'

export const useAutomationStore = defineStore('automations', {
    state: () => ({
        automations: [],
        dialog: false,
        dialogMode: 'add',  // 'add' or 'edit'
        currentAutomation: null
    }),
    actions: {
      saveAutomation(data) {
        if (this.dialogMode === 'add') {
          data.id = Date.now().toString();
          this.automations.push(data);
          console.log("automation store:", this.automations);
        } else {
          const index = this.automations.findIndex(a => a.id === data.id);
          if (index !== -1) {
            this.automations[index] = data;
          }
        }
        this.closeDialog();
      },
        removeAutomation(id) {
            console.log('id:', id);
            this.automations = this.automations.filter(auto => auto.id !== id);
            // this.automations.pop(id)
        },
        updateAutomation(id, updates) {
            const index = this.automations.findIndex(automation => automation.id === id);
            if (index !== -1) {
                this.automations[index] = {...this.automations[index], ...updates};
            }
        },
          closeDialog() {
            this.dialog = false;
            this.currentAutomation = null;
          }
          
    }
});
