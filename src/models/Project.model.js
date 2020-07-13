import Sequelize from 'sequelize';
import { sequelize } from '../database';
import Tasks from "./Tasks.model";
const Project = sequelize.define('projects', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    priority: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.TEXT
    },
    deliverydate: {
        type: Sequelize.DATE
    },
}, {
    timestamps: false
});
Project.hasMany(Tasks, { foreingkey: "projectId", sourceKey: 'id' });
Tasks.belongsTo(Project, { foreingkey: "projectId", sourceKey: 'id' });
export default Project;