package com.example.burak.orderlist.Pages

import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.widget.DividerItemDecoration
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.RecyclerView
import android.support.v7.widget.helper.ItemTouchHelper
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import com.example.burak.orderlist.Items.ShoppingCart_RvAdapter
import com.example.burak.orderlist.Items.ShoppingCart_SwipeToDeleteCallback
import com.example.burak.orderlist.R

class ShoppingCart : Fragment(), View.OnClickListener{

    companion object {
        val rvAdapter = ShoppingCart_RvAdapter(("").map {""}.toMutableList())
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val rootView = inflater.inflate(R.layout.page_shoppingcart, container, false)
        val additem = rootView.findViewById(R.id.addItem) as TextView
        val recyclerview = rootView.findViewById(R.id.recyclerView) as RecyclerView

        additem.setOnClickListener(this)

        recyclerview.addItemDecoration(DividerItemDecoration(activity, DividerItemDecoration.VERTICAL))
        recyclerview.layoutManager = LinearLayoutManager(activity)
        recyclerview.adapter = rvAdapter

        val swipeHandler = object : ShoppingCart_SwipeToDeleteCallback(activity!!.applicationContext) {
            override fun onSwiped(viewHolder: RecyclerView.ViewHolder, direction: Int) {
                val adapter = recyclerview.adapter as ShoppingCart_RvAdapter
                adapter.removeAt(viewHolder.adapterPosition)
            }
        }
        val itemTouchHelper = ItemTouchHelper(swipeHandler)
        itemTouchHelper.attachToRecyclerView(recyclerview)

        return rootView
    }

    override fun onClick(v: View) {
        when (v.id) {
            R.id.addItem -> {
                rvAdapter.addItem("New item")
            }
        }
    }
}