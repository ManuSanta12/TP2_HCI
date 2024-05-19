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
        addAutomation(automation) {
            this.automations.push(automation);
            console.log("automations: ", this.automations)
        },
        removeAutomation(id) {
            //this.automations = this.automations.filter(automation => automation.id !== id);
            this.automations.pop(id)
        },
        updateAutomation(id, updates) {
            const index = this.automations.findIndex(automation => automation.id === id);
            if (index !== -1) {
                this.automations[index] = {...this.automations[index], ...updates};
            }
        },
        openDialog(mode, automation = {}) {
            this.dialog = true;
            this.dialogMode = mode;
            this.currentAutomation = mode === 'edit' ? automation : { id: Date.now().toString(), name: '', starters: [], actions: [], startersLength: 0, actionsLength: 0 };
          },
          closeDialog() {
            this.dialog = false;
            this.currentAutomation = null;
          },
          saveAutomation(data) {
            
            if (this.dialogMode === 'add') {
              this.automations.push(data);
            } else {
              const index = this.automations.findIndex(a => a.id === data.id);
              if (index !== -1) {
                this.automations[index] = data;
              }
            }
            this.closeDialog();
          }
    }
});
