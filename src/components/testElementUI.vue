<template>
  <div class="todoList">
    <el-input v-model="inputData" placeholder="请输入待办事项" type=""></el-input>
    {{inputData}}
    <el-button @click="handleAddClick()">添加待办</el-button>
    <p class="text-24">待办事项</p>
    <ul>
      <li v-for="(item, index) in waitList" :key="index" v-if="!item.bol">{{item.title}}
        <el-checkbox v-model="item.bol">待办未完成</el-checkbox>
      </li>
    </ul>
    <p class="text-24">完成事项</p>
    <ul>
      <li v-for="(item, index) in waitList" :key="index" v-if="item.bol">{{item.title}}
        <el-checkbox v-model="item.bol">待办已完成</el-checkbox>
      </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      waitList: [],
      // completeList: [],
      inputData: '',
      index: 2,
      temp: []
    }
  },
  methods: {
    handleAddClick () {
      if (this.inputData) {
        this.waitList.push({
          title: this.inputData,
          bol: false
        })
        console.log(this.waitList)
        this.inputData = ''
      }
    },
    completed (index) {
      console.log(index)
      this.waitList[index].bol = !this.waitList[index].bol
      console.log(111)
    },
    unCompleted (index) {
      let tmp = this.completeList[index]
      this.completeList.pop()
      this.waitList.push(tmp)
    }
  }
}
</script>
