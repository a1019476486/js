// var nums=[1,2,3];
// var permute = function(nums) {
//     var res=[];
//     var dfs=(visted,tmp)=>{
//         for(let i=0;i<nums.length;i++){
//             if(!visted[i]){
//                 visted[i]=1;
//                 tmp.push(nums[i]);
//                 if(tmp.length==nums.length){
//                     let newObj = JSON.parse(JSON.stringify(tmp));
//                     console.log(typeof([]))
//                     res.push(newObj);
//                 }
//                 dfs(visted,tmp);
//                 visted[i]=0;
//

//             }
//         }
//     }
//     dfs([],[]);
//     return res;
//     // let result = [];
//     // //findSon([],[]);
//     // function findSon(visited,item){
//     //     for(let j = 0; j < nums.length; j++){
//     //         if(!visited[j]){
//     //             visited[j] = true;
//     //             item.push(nums[j]);
//     //             if(item.length == nums.length){
//     //                 let newItem = JSON.stringify(item);
//     //                 newItem = JSON.parse(newItem)
//     //                 result.push(newItem);
//     //             }
//     //             findSon(visited, item);
//     //             visited[j] = false;
//     //             item.pop();
//     //         }
//     //     }
//     // }
//     // findSon([],[]);
//     // return result;
// };
// console.log(permute(nums));
// var target=15;
// var findContinuousSequence = function(target) {
//     let res=[];
//     for(let i=1;i<target/2;i++){
//         let tmp=[],j=i,tar=target;
//         let flag=0;
//         while(1){
//             tmp.push(j);
//             tar-=j++;
//             if(tar==0) {
//                 flag=1;
//                 break;
//             }
//             if(tar<0) break;
//         }
//         if(flag==1) res.push(tmp);
//     }
//     return res;
// };
// console.log(findContinuousSequence(target));

// var res;
// var kthLargest = function(root, k) {
//     search(root,k);
//     return res;
// };

// var search=(root,k)=>{
//     if(!root){
//         search(root.right,k);
//         k--;
//         if(k==0) res=root.val;
//         if(k>0) search(root.left,k);
//     }
// }
var nums = [2, 1, 2, 2];
var majorityElement = function (nums) {
    let cnt = 1,
        res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        cnt += res == nums[i] ? 1 : -1;
        if (cnt == 0) {
            res = nums[i];
            cnt = 1;
        }
    }
    return res;
};
console.log(majorityElement(nums));
// class CQueue {
//     constructor() {
//         this.stackA = [];
//         this.stackB = [];
//     }
//     appendTail(value) {
//         const { stackA, stackB } = this;
//         if (stackB.length != 0) {
//             for (let i = 0; i < stackB.length; i++) {
//                 stackA.push(stackB.pop());
//             }
//         }
//         stackA.push(value);
//     }
//     /**
//      * @return {number}
//      */
//     deleteHead() {
//         const { stackA, stackB } = this;
//         if (stackB.length == 0 && stackA.length == 0)
//             return -1;
//         if (stackB.length != 0) {
//             return stackB.pop();
//         }
//         else {
//             for (let i = 0; i < stackA.length; i++) {
//                 stackB.push(stackA.pop());
//             }
//             return stackB.pop();
//         }
//     }
// }

// var obj = new CQueue()
// obj.appendTail(1)
// var param_2 = obj.deleteHead()
// var nums=[0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var findRepeatNumber = function(nums) {
//     nums.sort((a,b)=>{
//         return a-b;
//     });
//     console.log(nums);
//     let res=-1;
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]==nums[i+1]){
//             res=nums[i];
//             break;
//         }
//     }
//     return res;
// };
// console.log(findRepeatNumber(nums));

//p16
// var nums=[-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6];
// var threeSum = function(nums) {
//     var res=[];
//     if(nums.length<3) return [];
//     nums.sort( (a,b)=>{return a-b>0} );
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]>0) break;
//         if(i>=1 && nums[i]==nums[i-1]) continue;
//         let l=i+1,r=nums.length-1;
//         while(l<r){
//             if(nums[i]+nums[l]+nums[r]<0){
//                 l++;
//             }
//             else if(nums[i]+nums[l]+nums[r]>0){
//                 r--;
//             }
//             else{
//                 res.push([nums[i],nums[l],nums[r]]);
//                 while(l<r && nums[l]==nums[l+1]) l++;
//                 while(l<r && nums[r]==nums[r-1]) r--;
//                 //break;
//                 l++;r--;
//             }
//         }
//     }
//     return res;
// };
//console.log(threeSum(nums));

// var str=" -124"
// const result = str.trim().match(/^(-|\+)?\d+/g);
// console.log(result)
// let ma=[
// ];
// var spiralOrder = function(matrix) {

//     var res=[];
//     if(matrix.length==0)  return res;
//     let m=matrix.length,n=matrix[0].length;
//     let end=m*n, i=0;
//     let right=n-1,down=m-1,left=0,up=0;
//     var row=0,col=0;

//     while(i<end){
//         for(col=left;col<=right;col++) {
//             if(i>=end) break;
//             res[i++]=matrix[up][col];
//         }
//         up++;

//         for(row=up;row<=down;row++) {
//             if(i>=end) break;
//             res[i++]=matrix[row][right];
//         }
//         right--;

//         for(col=right;col>=left;col--) {
//             if(i>=end) break;
//             res[i++]=matrix[down][col];
//         }
//         down--;

//         for(row=down;row>=up;row--) {
//             if(i>=end) break;
//             res[i++]=matrix[row][left];
//         }
//         left++;

//     }
//     return res;
// };

// console.log(spiralOrder(ma));
// var generateMatrix = function(n) {
//     // var res = new Array();
//     // for(let i = 0; i < n;) {i++;{
//     //     res[i] = ne}w Array();
//     //     for(let j = 0; j < n; j++) {
//     //         res[i][j] = 0;
//     //     }
//     // }
//     var res=new Array(n).fill(0).map(item => ([]));
//     let end=n*n, i=1;
//     let right=n-1,down=n-1,left=0,up=0;
//     var row=0,col=0;
//     while(i<=end){
//         for(col=left;col<=right;col++) res[row][col]=i++;
//         up++;col--;

//         for(row=up;row<=down;row++) res[row][col]=i++;
//         right--;row--;

//         for(col=right;col>=left;col--) res[row][col]=i++;
//         down--;col++;

//         for(row=down;row>=up;row--) res[row][col]=i++;
//         left++;row++;

//     }
//     return res;
// };
// console.log(generateMatrix())
// var nums = [2,2];
// var subsets = function(nums) {
//     let index=0;
//     let res=[];
//     while(index<Math.pow(2,nums.length)){
//         let tmp=index.toString(2);
//         let arr=[];
//         for(let i=tmp.length-1;i>=0;i--){
//             if(tmp[i]==1) {
//                 arr.push(nums[tmp.length-1-i]);
//             }
//         }
//         res.push(arr)
//         index++;
//     }
//     return res;
// };
// console.log(subsets(nums));

// var n=5;
// var generateMatrix = function(n) {
//     var res=[];
//     var i=0;
//     while(i<n*n){
//         let edge=0;
//         for(;i<n;i++) res[]

//         edge++;
//     }
// };
// generateMatrix(n);
// var array = [];
// for (var i = 0; i < 3; i++) {
//   array.push(() => i);
// }
// console.log(array)
// var newArray = array.map(i => i());
// console.log(newArray);

// var MinStack = function() {ß
//     this.data=[];
//     this.min=Infinity;
//     return this;
// };

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {
//     this.data.push(x);
//     this.min=x<this.min?x:this.min;
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//     let tmp=this.data.pop();
//     if(tmp == this.min){
//         this.min=Math.min(...this.data);
//     }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//     return this.data[this.data.length-1];
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//     return this.min;
// };

//  var obj = new MinStack();
//  obj.push(-2);
//  obj.push(0);
//  obj.push(-3);
//  var t1 = obj.getMin();
//  obj.pop();
//  var t2 = obj.top();
//  var t3 = obj.getMin();
// console.log(t1,t2,t3);

// var n=1;
// var isPowerOfTwo = function(n) {ß
//     var res=true;
//     let tmp=n.toString(2);
//     if(n==0) return false;
//     for(let i=1;i<tmp.length;i++){
//         if(tmp[i]!=0){
//             res=false;
//             break;
//         }
//     }
//     // while(n!=0){
//     //     if(n%2==0) n=n/2;
//     //     else {
//     //         res=false;
//     //         break;
//     //     }
//     // }
//     return res;
// };
// console.log(isPowerOfTwo(n));

// var nums=[10,9,9,9,10];
// var majorityElement = function(nums) {
//     // let cnt=1;
//     // let result=nums[0];
//     // for(let i=1;i<nums.length;i++){
//     //     if(result==nums[i]){
//     //         cnt++;
//     //     }
//     //     else{
//     //         cnt--;
//     //     }
//     //     if(cnt<0){
//     //         result=nums[i];
//     //         cnt=1;
//     //     }
//     //     console.log(cnt);
//     // }
//     // return result;
// };
// console.log(majorityElement(nums));

// let a=[7, 1, 5, 3, 6, 4];
// var maxProfit = function(prices) {
//     let profit=0;
//     let low=prices[0];
//     let high=prices[0];
//     for(let i=0;i<prices.length;i++){
//         while(i<prices.length && prices[i]>prices[i+1]){
//             i++;
//         }
//         low=prices[i];
//         while(i<prices.length && prices[i]<prices[i+1]){
//             i++;
//         }
//         high=prices[i];
//         profit+=high-low;
//     }
//     return profit;
// };
// console.log(maxProfit(a));

// var strs=["dog","racecar","car"];
// var strs=["a","a"];
// var longestCommonPrefix = function(strs) {
//     var res="";
//     if(strs.length==0) return res;
//     res=strs[0];
//     // console.log(res);
//     for(let i=1;i<strs.length;i++){
//         res=cmpStr(strs[i],res);
//     }
//     return res;
// };

// var cmpStr=(strs,res)=>{
//     let ans="";
//     for(let i=0;i<strs.length;i++){
//         if(strs[i]==res[i]){
//             ans+=strs[i]
//         }
//         else{
//             break;
//         }
//     }
//     return ans;
// }
// console.log(longestCommonPrefix(strs));
// let str="Let's take LeetCode contest";

// var test=(str)=>{
//     var newstr = str.split("").reverse().join("");
//     return newstr;
// };

// var reverseWords = function(s) {
//     let str="";
//     let tmp=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i]!=' '){
//             tmp.push(s[i]);
//         }
//         else{
//             let j=0;
//             while(tmp.length!=0){
//                 str+=tmp.pop();
//             }
//             str+=' ';
//         }
//     }
//     while(tmp.length!=0){
//         str+=tmp.pop();
//     }
//     return str;
// };

// console.log(reverseWords(str));

// let n=5;
// var canWinNim = function(n) {
//     return (n%4==0?false:true);
// };
// console.log(canWinNim(n));

// let t=[3,9,20,null,null];
// var maxDepth = function(root) {
//     let len=0;
//     while(Math.pow(2,len)<=root.length){
//         len++;
//     }
//     return len;
// };
// console.log(maxDepth(t));

// var x=121;
// var isPalindrome = function(x) {
//     let str=x.toString();
//     //console.log(typeof(str));
//     for (let i=0,j=str.length-1; i<=j; i++,j--) {
//         if(str[i]!=str[j]) return false;
//     }
//     return true;
// };
// console.log(isPalindrome(x));
// var deleteNode = function(node) {
//     node.val=node.next.val;
//     node.next=node.next.next;
// };
// var n="00000000000000000000000000001011";
// var hammingWeight = function(n) {
//     let res=parseInt(n).toString(2);
//     let cnt=0;
//     for (let i = 0; i < res.length; i++) {
//         if(res[i]==1) cnt++;
//     }
//     return cnt;
// };
// console.log(hammingWeight(n));
// var x=1;
// var y=4;
// var hammingDistance = function(x, y) {
//     //console.log(parseInt(x^y).toString(2));
//     let n=parseInt(x^y).toString(2);
//     let cnt=0;
//     for (let i = 0; i < n.length; i++) {
//         if(n[i]==1) cnt++;

//     }

//     return cnt;
// };
// console.log(hammingDistance(x,y))

// var nums=[9,6,4,2,3,5,7,0,1];
// var missingNumber = function(nums) {
//     let totalSum=0,sum=0;
//     for (let index = 0; index < nums.length; index++) {
//         totalSum+=index;
//         sum+=nums[index];
//     }
//     return totalSum+nums.length-sum;
// };
// console.log(missingNumber(nums));

// var s="{}";

// var isValid = function(s) {
//     let res=true;
//     let stack=[];
//     for(let i in s){
//         let tmp;
//         switch(s[i]){
//             case '(':stack.push(1); break;
//             case '[':stack.push(2); break;
//             case '{':stack.push(3); break;
//             case ')':
//                 if(stack.length==0) return false;
//                 if(stack.pop()==1) res=true;
//                 else return false;
//                 break;
//             case ']':
//                 if(stack.length==0) return false;
//                 if(stack.pop()==2) res=true;
//                 else return false;

//                 break;
//             case '}':
//                 if(stack.length==0) return false;
//                 if(stack.pop()==3) res=true;
//                 else return false;
//                 break;
//         }
//         console.log(stack)
//     };
//     if(stack.length==0) res=true;
//     else res=false;
//     return res;
// };
// console.log(isValid(s));

//var nums = [2,1,1,2];
//2 1 3
// var rob = function (nums) {
//     let max,dp=[];
//     dp[0]=nums[0];
//     if(nums.length==1){
//         max=nums[0];
//     }
//     else if(nums.length==0) max=0;
//     else{
//         max=nums[0]>nums[1]?nums[0]:nums[1];
//         dp[1]=max;
//         for (let i = 2; i < nums.length; i++) {
//             dp[i]=dp[i-1]>nums[i]+dp[i-2]?dp[i-1]:nums[i]+dp[i-2];
//             max=max>dp[i]?max:dp[i];
//         }
//     }
//     //console.log(dp)
//     return max;
// };
// console.log(rob(nums));

// var prices=[7,6,4,3,1];

// var maxProfit = function(prices) {
//     let profit=[0];
//     let max=profit[0];
//     let minPrice=prices[0];
//     for (let i = 0; i < prices.length; i++) {
//         minPrice=prices[i]<minPrice?prices[i]:minPrice;
//         profit[i]=profit[i-1]>(prices[i]- minPrice)?profit[i-1]:prices[i]- minPrice;
//     }
//     //console.log(profit)
//     return profit[profit.length-1];
// };
// console.log(maxProfit(prices));

//let nums=[-2,1,-3,4,-1,2,1,-5,4];
// var maxSubArray = function(nums) {
//     let subSum=[nums[0]];
//     let max=subSum[0];
//     for (let i = 1; i < nums.length; i++) {
//         if(subSum[i-1]<0) subSum[i]=nums[i];
//         else{
//             subSum[i]=subSum[i-1]+nums[i];
//         }
//         max=subSum[i]>max?subSum[i]:max;
//     }
//     //console.log(subSum)
//     return max;
// };
// console.log(maxSubArray(nums))
// let n=45;
// var f=[0,1,2];
// for(let i=3;i<1000;i++){
// 	f.push(f[i-1]+f[i-2]);
// }
// //console.log(f)
// var climbStairs = function(n) {
// 	return f[n];
// };

// console.log(climbStairs(n));
// var nums1 = [1,2,2,0], m = 3;
// var nums2 = [1,4],       n = 2;
// var merge = function(nums1, m, nums2, n) {
//     let tmp=[];
//     let cnt=0;
//     let t1=nums1.slice(0,m);
//     let i,j;
//     for (i = 0,j=0; i<m,j<n;) {
//     	if(t1[i]<=nums2[j]){
//     		tmp[cnt++]=t1[i++];
//     	}
//     	else{
//     		tmp[cnt++]=nums2[j++];
//     	}
//     }
//     if(i<m){
//     	for (; i < m; i++) {
//     		tmp.push(nums1[i]);
//     	}
//     }
//     if(j<n){
//     	for (; j < n; j++) {
//     		tmp.push(nums2[j]);
//     	}
//     }

//     for (var k = 0; k < tmp.length; k++) {
//     	nums1[k]=tmp[k];
//     }
//     return nums1;

// };
// console.log(merge(nums1, m, nums2, n));

// var nums1 = [1,2,2,1], nums2 = [2,2];

// var intersect = function(nums1, nums2) {
// 	var n=nums1.length>=nums2.length?1:2;

// 	var tmp=new Array(nums1.length);
// 	nums1.sort();
// 	nums2.sort();
//     for (var i = 0; i < nums2.length; i++) {

//     }
// };

// console.log(intersect(nums1,nums2));

// var nums=[1,1,1,3,3,4,3,2,4,2];

// var containsDuplicate = function(nums) {
//     return Array.from(new Set(nums)).length==nums.length?false:true;
// };

// console.log(containsDuplicate(nums))

// var nums=[-1,-2,-3,-4,-5];
// var target=-8;
// var twoSum = function(nums, target) {
// 	let tmp;
//     for (var i = 0; i < nums.length; i++) {
// 		tmp=target-nums[i];
// 		for (var j = i+1; j < nums.length; j++) {
// 			if(tmp==nums[j]){
// 				return [i,j];
// 			}
// 		}
//     }
// };

// console.log(twoSum(nums,target));
// var rotate = function(nums, k) {
// 	let tmp;
// 	k=k%nums.length;
//     for (var i = nums.length-1,j=0; i>j; i--,j++) {
//     	tmp=nums[i];
//     	nums[i]=nums[j];
//     	nums[j]=tmp;
//     }
//     for (var i =0,j=k-1; i<j; i++,j--) {
//     	tmp=nums[i];
//     	nums[i]=nums[j];
//     	nums[j]=tmp;
//     }
//     for (var i = nums.length-1,j=k; i>j; i--,j++) {
//     	tmp=nums[i];
//     	nums[i]=nums[j];
//     	nums[j]=tmp;
//     }

//     return nums;
// };

//console.log(rotate(nums,k));

// var singleNumber = function(nums) {
// 	let res=nums[0];
//     for (var i = nums.length - 1; i >= 1; i--) {
//     	res^=nums[i];
//     }
//     return res;
// };

// console.log(singleNumber(nums));
