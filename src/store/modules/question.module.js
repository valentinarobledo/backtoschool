import ApiService from "@/common/api.service";
import { 
QUESTIONS_INDEX,
QUESTIONS_ADD,
QUESTIONS_EDIT,
ANSWERS_EDIT
} from "../actions.type";


import {
SET_QUESTIONS
 } from "../mutations.type";

const state = {
 questions: []
};

const getters = {
 questions(state) {
 	return questions.state
 }
};

const actions = {
  [QUESTIONS_INDEX](context, data){
  	return ApiService.post("question/list", data).
    then( result => {
  		context.commit(SET_QUESTIONS, result );
  		return Promise.resolve(result)
  	})
  },
  [QUESTIONS_ADD](context, data){
    return ApiService.post("question/store", data);
  },
  [QUESTIONS_EDIT](context, data){
    return ApiService.post("question/editQuestion", data);
  },
  [ANSWERS_EDIT](context, data){
    return ApiService.post("question/editAnswer", data);
  }
  
};

const mutations = {
 [SET_QUESTIONS](context, data){
 	context.questions = data
 }
};

export default {
  state,
  actions,
  mutations,
  getters
};
