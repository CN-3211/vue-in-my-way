<template>
  <div class="todoList">
    <el-input v-model="inputData" placeholder="请输入待办事项" type=""></el-input>
    {{inputData}}
    <el-button @click="handleAddClick()">添加待办</el-button>
    
    <p>待办事项</p>
    <ul>
      <li v-for="(item, index) in waitList" :key="index">{{item}}<el-button @click="handleDeleteClick(index)">待办已完成</el-button></li>
    </ul>
    <hr>
    <p>完成事项</p>
    <ul>
      <li v-for="(item, index) in completeList" :key="index">{{item}}<el-button @click="handleReClick(index)">待办未完成</el-button></li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      waitList: [],
      completeList: [],
      inputData: '',
      index: 2,
      temp: []
    }
  },
  methods: {
    handleAddClick () {
      if (this.inputData) {
        this.waitList.push(this.inputData)
        this.inputData = ''
      }
    },
    handleDeleteClick (index) {
      console.log(index)
      let tmp = this.waitList[index]
      this.waitList.splice(index, 1)
      this.completeList.push(tmp)
    },
    handleReClick (index){
      let tmp = this.completeList[index]
      this.completeList.pop()
      this.waitList.push(tmp)
    }
  }
}
</script>
